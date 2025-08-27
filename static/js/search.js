// Konfigurasi awal (tidak berubah)
var summaryInclude = 60;
var resultsPerPage = 9;
var currentPage = 1;
var searchResults = [];
var fuse;

var fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.2,
  tokenize: true,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    { name: "title", weight: 0.8 },
    { name: "contents", weight: 0.5 },
    { name: "tags", weight: 0.3 },
    { name: "categories", weight: 0.3 },
    { name: "image", weight: 0.2 }
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
    $('#search-results').html("<p>Please enter a word or phrase above</p>");
  }
}

$.getJSON("/index.json", function (data) {
  fuse = new Fuse(data, fuseOptions);
  initSearchFromURL();
});

$("#search-query").on("input", function () {
  var searchQuery = $(this).val().trim();
  if (searchQuery.length > 0) {
    executeSearch(searchQuery);
  } else {
    $('#search-results').html("<p>Please enter a word or phrase above</p>");
  }
});

function executeSearch(searchQuery) {
  if (!fuse) return;
  var result = fuse.search(searchQuery);
  searchResults = result;
  if (searchResults.length > 0) {
    currentPage = 1;
    displayPage(currentPage);
  } else {
    $('#search-results').html("<p>No matches found</p>");
  }
}

function displayPage(page) {
  $('#search-results').empty();
  var start = (page - 1) * resultsPerPage;
  var end = start + resultsPerPage;
  var paginatedResults = searchResults.slice(start, end);

  $.each(paginatedResults, function (key, value) {
    var templateDefinition = $('#search-result-template').html();
    var output = render(templateDefinition, {
      key: key,
      title: value.item.title,
      link: value.item.permalink,
      tags: value.item.tags,
      categories: value.item.categories,
      image: value.item.image,
      snippet: value.item.contents.substring(0, summaryInclude * 2)
    });
    $('#search-results').append(output);
  });

  renderPagination();
}


// ===================================================================
// === FUNGSI PAGINASI BARU DENGAN LOGIKA PROFESIONAL ===
// ===================================================================
function renderPagination() {
  var totalPages = Math.ceil(searchResults.length / resultsPerPage);
  
  // Jangan tampilkan paginasi jika hanya ada satu halaman atau kurang
  if (totalPages <= 1) {
    $('#pagination-container').empty();
    return;
  }

  var paginationHtml = '<div class="pagination">';
  
  // Tombol "Previous"
  if (currentPage > 1) {
    paginationHtml += `<button class="page-btn" data-page="${currentPage - 1}">Previous</button>`;
  }

  var pagesToShow = new Set();
  var pageRange = 1; // Jumlah halaman untuk ditampilkan di sekitar halaman aktif

  // Selalu tampilkan halaman pertama dan terakhir
  pagesToShow.add(1);
  pagesToShow.add(totalPages);

  // Tampilkan halaman di sekitar halaman aktif
  for (let i = currentPage - pageRange; i <= currentPage + pageRange; i++) {
    if (i > 0 && i <= totalPages) {
      pagesToShow.add(i);
    }
  }

  var sortedPages = Array.from(pagesToShow).sort((a, b) => a - b);
  var lastPage = 0;

  sortedPages.forEach(page => {
    // Tambahkan elipsis (...) jika ada lompatan halaman
    if (page > lastPage + 1) {
      paginationHtml += '<span class="page-ellipsis">...</span>';
    }
    
    paginationHtml += `<button class="page-btn ${page === currentPage ? 'active' : ''}" data-page="${page}">${page}</button>`;
    lastPage = page;
  });

  // Tombol "Next"
  if (currentPage < totalPages) {
    paginationHtml += `<button class="page-btn" data-page="${currentPage + 1}">Next</button>`;
  }

  paginationHtml += '</div>';
  $('#pagination-container').html(paginationHtml);

  // Attach event listener ke tombol yang baru dibuat
  $('.page-btn').click(function () {
    currentPage = parseInt($(this).attr('data-page'));
    displayPage(currentPage);
  });
}
// ===================================================================

function render(templateString, data) {
  var conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
  var copy = templateString;

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
