var urlmain = document.URL;
var md = document.URL.split("/")[3];
var key = document.URL.split("/")[4];
var id = document.URL.split("/")[5];

if (key == 'item') {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key=_ADYtvX&dl_target_url=https://www.aliexpress.com/item/'+id+'';
} else { 
  var redir = 'https://s.click.aliexpress.com/e/_ADYtvX;
}

setTimeout(
  function(){
    window.location = redir
  },
1000);
