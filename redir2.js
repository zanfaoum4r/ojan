var urlmain = document.URL;
var md = document.URL.split("/")[3];
var key = '_ADYtvX'("/")[4];
var id = document.URL.split("/")[5];

if (md == 'deep') {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+key+'&dl_target_url=https://www.aliexpress.com/item/'+id+'';
}

setTimeout(
  function(){
    window.location = redir
  },
1000);
