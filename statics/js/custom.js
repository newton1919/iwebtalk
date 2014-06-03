$.mobile.document.on( "click", ".more", function( evt ) {
    $( "#popupArrow" ).popup( "open", { x: evt.pageX, y: evt.pageY } );
    evt.preventDefault();
});

$.mobile.document.on( "click", ".user", function( evt ) {
    //$( "#popupArrow" ).popup( "open", { x: evt.pageX, y: evt.pageY } );
    evt.preventDefault();
});


$(function(){
	var userWidth = $(".ui-content").width()-44;
    $(".user").css("width",userWidth);
    
    //jquery ul字典排序
    var ols = new Object();
    var ts = new Array();
    $("#user_list").find(".online").each(function(i,v){
    	var name = $(v).find("a").text();
    	ts.push(name);
    	ols[name] = $(v);
    });
    ts.sort(compare);
    ts.reverse();
    $("li").remove(".online");
    for(var k=0;k<ts.length;k++){
		$("#pre_online").after(ols[ts[k]]);
		//alert(pinyin.getCamelChars(ts[k]));
	}
    //有序列表中插入新元素
    var $new = $('<li class="online user_obj ui-li-has-alt"><a class="ui-btn">曹操</a><a class="more ui-btn ui-btn-icon-notext ui-icon-carat-r ui-btn-a" title=""></a></li>');
    add_to_order_ul($("#user_list"), $new, ".online");
    //有序列表中移除元素
    $("[data-rel='小强']").remove();
});

function add_to_order_ul(ul, li, li_cls){
	var insert_val = li.find("a").text();
	var li_list = ul.find(li_cls);
	var len = li_list.length;
	for (var i=0; i<len; i++) {
		var cur_li = $(li_list[i]);
		var cur_name = cur_li.find("a").text();
		var ret = compare(insert_val, cur_name);
		if (ret == 1){
			if(i==len-1){cur_li.after(li);};
    	} else {
    		cur_li.before(li);
    		break;
    	}
	}
};
function compare(a,b){
	var a_after = pinyin.getCamelChars(a).toLowerCase();
	var b_after = pinyin.getCamelChars(b).toLowerCase();
	return a_after > b_after;
}