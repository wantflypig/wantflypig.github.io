/**
 * Created by Administrator on 2016/9/17.
 */
$(function(){
    $("#fullpage").fullpage({
        sectionsColor:["#0da5d6","#2AB561","#DE8910","#16BA9D","#0DA5D6"],
        anchors:['s1','s2','s3','s4','s5'],
        menu:'#menu',
        afterLoad: function(link,index){
//                    $(".section").eq(index-1).addClass("current");
            $(".section").removeClass("current");

            setTimeout(function(){
                $(".section").eq(index-1).addClass("current");
            },100)
        },
        navigation:true
    });

});