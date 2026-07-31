// Konfigurasi awal
var summaryInclude = 60;
var resultsPerPage = 9;
var currentPage = 1;
var searchResults = [];
var fuse;

// Opsi Fuse.js - disederhanakan untuk menghindari duplikasi
var fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.2,
  tokenize: true,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  keys: [
    { name: "title", weight: 0.8 },
    { name: "contents", weight: 0.5 },
    { name: "content", weight: 0.5 },
    { name: "summary", weight: 0.5 },
    { name: "tags", weight: 0.3 },
    { name: "categories", weight: 0.3 }
  ]
};

function initSearchFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('s');
  const searchInput = $("#search-query");

  if (searchQuery && searchInput.length) {
    searchInput.val(searchQuery);
    executeSearch(searchQuery);
  } else {
    $('#search-results').html("<p style='grid-column: 1 / -1; text-align: center; color: #666;'>Ketikkan sesuatu untuk mulai mencari...</p>");
  }
}

function executeSearch(searchQuery) {
  if (!fuse) {
    console.warn("Fuse belum diinisialisasi");
    return;
  }
  var result = fuse.search(searchQuery);
  searchResults = result;
  if (searchResults.length > 0) {
    currentPage = 1;
    displayPage(currentPage);
  } else {
    $('#search-results').html("<p style='grid-column: 1 / -1; text-align: center; color: #666;'>Hasil tidak ditemukan. Coba kata kunci lain.</p>");
  }
}

function displayPage(page) {
  $('#search-results').empty();
  var start = (page - 1) * resultsPerPage;
  var end = start + resultsPerPage;
  var paginatedResults = searchResults.slice(start, end);

  $.each(paginatedResults, function (key, value) {
    var item = value.item; 
    var templateDefinition = $('#search-result-template').html();
    
    var rawContent = item.contents || item.content || item.summary || "";
    var safeSnippet = rawContent.substring(0, summaryInclude * 2) + "...";
    
    var rawTags = item.tags || [];
    var safeTags = Array.isArray(rawTags) ? rawTags.join(', ') : (rawTags || "Tanpa Tag");
    
    var rawCategories = item.categories || [];
    var safeCategories = Array.isArray(rawCategories) ? rawCategories.join(', ') : (rawCategories || "Uncategorized");
    
    var output = render(templateDefinition, {
      key: key,
      title: item.title || "Tanpa Judul",
      link: item.permalink || item.relpermalink || "#",
      tags: safeTags,
      categories: safeCategories,
      image: item.image || "/images/profil.png",
      snippet: safeSnippet
    });
    
    $('#search-results').append(output);
  });

  renderPagination();
}

function renderPagination() {
  var totalPages = Math.ceil(searchResults.length / resultsPerPage);
  
  if (totalPages <= 1) {
    $('#pagination-container').empty();
    return;
  }

  var paginationHtml = '<div class="pagination">';
  
  if (currentPage > 1) {
    paginationHtml += `<button class="page-btn" data-page="${currentPage - 1}">Previous</button>`;
  }

  var pagesToShow = new Set();
  var pageRange = 1;

  pagesToShow.add(1);
  pagesToShow.add(totalPages);

  for (let i = currentPage - pageRange; i <= currentPage + pageRange; i++) {
    if (i > 0 && i <= totalPages) {
      pagesToShow.add(i);
    }
  }

  var sortedPages = Array.from(pagesToShow).sort((a, b) => a - b);
  var lastPage = 0;

  sortedPages.forEach(page => {
    if (page > lastPage + 1) {
      paginationHtml += '<span class="page-ellipsis">...</span>';
    }
    
    paginationHtml += `<button class="page-btn ${page === currentPage ? 'active' : ''}" data-page="${page}">${page}</button>`;
    lastPage = page;
  });

  if (currentPage < totalPages) {
    paginationHtml += `<button class="page-btn" data-page="${currentPage + 1}">Next</button>`;
  }

  paginationHtml += '</div>';
  $('#pagination-container').html(paginationHtml);

  $('.page-btn').click(function () {
    currentPage = parseInt($(this).attr('data-page'));
    displayPage(currentPage);
    if (document.querySelector('.search-header')) {
      document.querySelector('.search-header').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function render(templateString, data) {
  var conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*\}/g;
  var copy = templateString;

  var matches;
  while ((matches = conditionalPattern.exec(templateString)) !== null) {
    if (data[matches[1]]) {
      copy = copy.replace(matches[0], matches[2]);
    } else {
      copy = copy.replace(matches[0], '');
    }
  }

  for (var key in data) {
    var find = '\\$\\{\\s*' + key + '\\s*\\}';
    var re = new RegExp(find, 'g');
    copy = copy.replace(re, data[key]);
  }

  return copy;
}

// Eksekusi setelah DOM siap
document.addEventListener('DOMContentLoaded', function() {
  if (typeof jQuery === 'undefined') {
    console.error("Error: jQuery belum dimuat oleh browser.");
    return;
  }

  var indexUrl = window.searchIndexUrl || "/index.json";

  $.getJSON(indexUrl, function (data) {
    fuse = new Fuse(data, fuseOptions);
    initSearchFromURL();
  }).fail(function(jqxhr, textStatus, error) {
    console.error("Gagal memuat index.json: ", textStatus, error);
    $('#search-results').html("<p style='grid-column: 1 / -1; text-align: center; color: #d1211b;'>Terjadi kesalahan: Gagal memuat data pencarian (index.json). Pastikan file tersebut tersedia.</p>");
  });

  $("#search-query").on("input", function () {
    var searchQuery = $(this).val().trim();
    if (searchQuery.length > 0) {
      executeSearch(searchQuery);
    } else {
      $('#search-results').html("<p style='grid-column: 1 / -1; text-align: center; color: #666;'>Ketikkan sesuatu untuk mulai mencari...</p>");
    }
  });
});