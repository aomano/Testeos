$(document).ready(function() {
    $.ajax({
      url: "https://rss.app/feeds/t0T53neI7dV8uMam.xml",
      dataType: "xml",
      success: function(data) {
        $(data)
          .find("item")
          .each(function() {
            var title = $(this)
              .find("title")
              .text();
            var link = $(this)
              .find("link")
              .text();
            var description = $(this)
              .find("description")
              .text();
            var pubDate = $(this)
              .find("pubDate")
              .text();
  
            var div = $("<div>").addClass("feed-item");
            div.append($("<h2>").html(title));
            div.append($("<p>").html(description));
            div.append($("<a>").attr("href", link).html("Read More"));
            div.append($("<p>").html(pubDate));
            $("#feed").append(div);
          });
      },
      error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
      }
    });
  });
  
  $(document).ready(function() {
    $.ajax({
      url: "https://rss.app/feeds/tgB4vGItrQLTvWaP.xml",
      dataType: "xml",
      success: function(data) {
        $(data)
          .find("item")
          .each(function() {
            var title = $(this)
              .find("title")
              .text();
            var link = $(this)
              .find("link")
              .text();
            var description = $(this)
              .find("description")
              .text();
            var pubDate = $(this)
              .find("pubDate")
              .text();
  
            var div = $("<div>").addClass("feed-item");
            div.append($("<h2>").html(title));
            div.append($("<p>").html(description));
            div.append($("<a>").attr("href", link).html("Read More"));
            div.append($("<p>").html(pubDate));
            $("#feedcrypto").append(div);
          });
      },
      error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
      }
    });
  });
  
  $(document).ready(function() {
    $.ajax({
      url: "https://rss.app/feeds/t4JFdrEMN8ZN7zQm.xml",
      dataType: "xml",
      success: function(data) {
        $(data)
          .find("item")
          .each(function() {
            var title = $(this)
              .find("title")
              .text();
            var link = $(this)
              .find("link")
              .text();
            var description = $(this)
              .find("description")
              .text();
            var pubDate = $(this)
              .find("pubDate")
              .text();
  
            var div = $("<div>").addClass("feed-item");
            div.append($("<h2>").html(title));
            div.append($("<p>").html(description));
            div.append($("<a>").attr("href", link).html("Read More"));
            div.append($("<p>").html(pubDate));
            $("#news-home").append(div);
          });
      },
      error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
      }
    });
  });
  
  
  $(document).ready(function() {
    $.ajax({
      url: "https://rss.app/feeds/t1omsvfKEHwd5Xa4.xml",
      dataType: "xml",
      success: function(data) {
        $(data)
          .find("item")
          .each(function() {
            var title = $(this)
              .find("title")
              .text();
            var link = $(this)
              .find("link")
              .text();
            var description = $(this)
              .find("description")
              .text();
            var pubDate = $(this)
              .find("pubDate")
              .text();
  
            var div = $("<div>").addClass("feed-item");
            div.append($("<h2>").html(title));
            div.append($("<p>").html(description));
            div.append($("<a>").attr("href", link).html("Read More"));
            div.append($("<p>").html(pubDate));
            $("#trading-news").append(div);
          });
      },
      error: function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
      }
    });
  });
  