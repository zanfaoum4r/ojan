var urlmain = document.URL;
var md = document.URL.split("/")[3];
var key = document.URL.split("/")[4];
var id = document.URL.split("/")[5];

if (md == 'deep') {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?dl_target_url=http://www.aliexpress.com/item/item/'+id+'.html&aff_short_key=_9z6YLq';
} else { 
  var redir = 'https://s.click.aliexpress.com/e/'+key;
}

setTimeout(
  function(){
    window.location = redir
  },
1000);
