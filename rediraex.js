var d='';
var d= window.location.href;
d=d.replace("?", " ");
d=d.match(/\d{11,20}/);
location.href = 'http://s.click.aliexpress.com/deep_link.htm?dl_target_url=http://www.aliexpress.com/item/item/'+d+'.html&aff_short_key=_9z6YLq';
