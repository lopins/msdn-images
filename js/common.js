var _hmt = _hmt || [];

$(document).ready(function(){
    $(".close_btn,.close_btn2").click(function () {
        // $(this).toggleClass("open");
        $(".menu_area").fadeToggle(1000);
    });
    $(".nav a").click(function () {
                $(this).animate({
                width: "150px",
                height: "150px",
                marginTop:"24px",
                lineHeight:"150px"
        },1000);
                //window.setTimeout("ok();",800);

    });
    $(document).on("mouseover",".tip",function () {
        $(this).find("i").show();
    });
    $("#tip2").mouseover(function () {
        $("#tip2 i").show();
    });
    $(document).on("mouseout",".tip",function () {
        $(this).find("i").hide();
    });
    $(".return_top .top").click(function(){
        $('body,html').animate({scrollTop:0},500);
    });

    // 获取Windows/
    let downData;
    $(function () {
        let lastPart = window.location.pathname.split('/').pop();
        if (["", "index.html"].includes(lastPart)) {
            dataFlag = 'windows';
        } else if (lastPart === "windows.html") {
            dataFlag = 'windows';
        } else if (lastPart === "office.html") {
            dataFlag = 'office';
        } else if (lastPart === "soft.html") {
            dataFlag = 'soft';
        } else if (lastPart === "article.html") {
            dataFlag = 'article';
        } else {
            dataFlag = 'other';
        }

        /*if (["", "index.html"].includes(lastPart)) {
            // xxx
        } else */if (["", "index.html"].includes(lastPart) || lastPart === "windows.html" || lastPart === "office.html") {
            $.ajax({
                type: "get",
                url: "../data/" + dataFlag + ".json?t=" + Date.now(),
                dataType: "json",
                success: function (res) {
                    let data = [];
                    data.push({children: []});
                    // data[0].children = convert(res, 0);
                    data[0].children = res;
                    // console.log('返回结果：', data)

                    let box = $(".version_content");
                    let box_div = $("<div id='first'/>");
                    box.append(box_div);
                    // if (res.length > 0){
                    //     // for (let i = 0; i < res.length; i++){
                    //     //    let item_title = $("<div class='form_group'>")
                    //     //     console.log(box)
                    //     //     item_title.append("<p>请选择系统：<a href=\"javascript:void(0)\" class=\"tip\">?<i style=\"display: none;\">请选择你所需要的Windows</i></a></p>")
                    //     //     box.append(item_title)
                    //     // }
                    downData = data[0].children;
                    data.forEach((item, i) => {
                        // console.log(item)
                        let item_title = $("<div class='form_group'>")
                        item_title.append("<p>请选择：</p>")
                        // item_title.append("<p>请选择系统：<a href=\"javascript:void(0)\" class=\"tip\">?<i style=\"display: none;\">请选择你所需要的Windows</i></a></p>")
                        box_div.append(item_title)
                        if (item.children.length > 0) {
                            let select_box = $("<div id='' class=\"form_group\">")
                            let select_ul = $("<ul class=''/>")
                            select_box.append(select_ul)
                            box_div.append(select_box)
                            item.children.forEach((item, ii) => {
                                downItem(item, select_ul, i, [ii])
                            })
                        }
                    })
                    // }
                }
            });

            $(".bg").click(function () {
                // $(".link ul li a").attr("class","");
                $("#dialog").hide();
            });
        
            $(document).on("click", "#down_btn", function () {
                let data = JSON.parse($(this).attr('data'));
                let index = $(this).attr('index').split(",");
                if (!data.keywords) {
                    alert("未找到下载地址");
                    return;
                }
                let down = JSON.parse(data.keywords);

                // 移除不需要的键值对
                // delete down["123云盘"];             // 123云盘付费下载
                delete down["定制装机U盘"];         // 广告链接
                delete down["定制系统盘"];          // 广告链接
                delete down["购买U盘"];             // 广告链接

                $("#box").hide();
                $("#desc").html(data.description);
                let item = downData;
                for (let i = 0; i < index.length; i++) {
                    let edit_li = $("<li class='select_on' >" + item[index[i]].name + "</li>")
                    item = item[index[i]].children
                    edit_li.appendTo("#edit_view")
                }
                $("<li class='off' id='edit_btn'>修改</li>").appendTo("#edit_view")
                $("#d_img").attr('src', downData[index[0]].pc_img)
                // console.log(downData[index[0]].image)
                let keys = Object.keys(down)
                $("#area_url").empty();
                for (let i = 0; i < keys.length; i++) {
                    let str_url = "";
                    // console.log('keys[i]', keys[i]);
                    if (keys[i].indexOf("|") != -1) {
                        let key = keys[i].split("|");
                        // console.log(key)
                        str_url = $("<a class='down_list' target='_blank' code='" + key[1] + "' href='" + down[keys[i]] + "'>" + key[0] + "</a>");
                        str_url.click(function () {
                            // console.log($(this).attr('code'))
                            let code = $(this).attr('code');
                            let url = $(this).attr('url')
                            let dialog = $("#dialog");
                            $("#dialog_title").text("一切为你准备就绪");
                            $("#dialog_code").text("提取码：" + $(this).attr('code'));
                            $("#dialog_btn").text("复制提取码");
                            $("#dialog_btn").attr("code", code);
                            $("#dialog_btn").attr("url", url);
                            dialog.show();
                        })
                    } else {
                        str_url = $("<a class='down_list' target='_blank' code='https://msdn.lopins.cn/' href='" + down[keys[i]] + "'>" + keys[i] + "</a>");
                        str_url.click(function () {
                            let code = $(this).attr('code');
                            let url = $(this).attr('url')
                            let dialog = $("#dialog");
                            $("#dialog_title").text("一切为你准备就绪");
                            $("#dialog_code").text("把系统库分享给好友");
                            $("#dialog_btn").text("复制官网地址");
                            $("#dialog_btn").attr("code", code);
                            $("#dialog_btn").attr("url", url);
                            dialog.show();
                        })
                    }
                    $("#area_url").append(str_url);
                }
                $(".content_box").show();
            });
        
            $("#dialog_btn").click(function () {
                let copy = document.createElement('input');
                copy.setAttribute("id", "cp_hgz_input");
                copy.value = $(this).attr('code');
                // console.log('copy.value',copy.value);
                document.getElementsByTagName('body')[0].appendChild(copy);
                document.getElementById('cp_hgz_input').select();
                document.execCommand('copy');
                // document.getElementById('cp_hgz_input').remove();
                var child = document.getElementById('cp_hgz_input');
                child.parentNode.removeChild(child);
                // window.open($(this).attr('url'));
            });
            
            $(document).on("click", "#edit_btn", function () {
                $(".content_box").hide();
                $(".box").show();
                $("#edit_view").empty();
            });
        
            function convert(data, pid) {
                let convertData = [];
                data.forEach((item, i) => {
                    if (item.pid === pid) {
                        convertData.push(item);
                        convertChild(data, item, item.id)
                    }
                })
                return convertData;
            }
        
            function convertChild(arr, pItem, pid) {
                pItem.children = pItem.children ? pItem.children : [];
                arr.forEach(item => {
                    if (item.pid === pid) {
                        pItem.children.push(item);
                        convertChild(arr, item, item.id)
                    }
                })
                return pItem.children;
            }
        
            function downItem(item, view, index, for_index) {
                // 把item 存进h5中，后续直接拿数据
                let select_item = $("<li class='off' id='select' data='" + JSON.stringify(item) + "' index='" + for_index.join(",") + "'>" + item.name + "</li>")
                view.append(select_item);
                let box_div;
                //组件存在则复用
                if ($('#a' + index).length > 0) {
                    box_div = $('#a' + index)
                } else {
                    box_div = $("<div id='a" + index + "' attr='" + item + "'/>")
                    box_div.appendTo(".version_content")
                }
                index++;
                if (for_index[for_index.length - 1] == 0) {
                    select_item.addClass("on")
                }
                select_item.click(function () {
                    //判断上一级是否选中
                    if (index - 3 >= 0) {
                        if ($('#a' + (index - 3) + " .on").length == 0) {
                            return;
                        }
                    }
                    // index == 2 时判断第一项有没有选中
                    if (index == 2 && $("#first .on").length == 0) {
                        return;
                    }
                    //添加选中状态
                    $(this).siblings("li").removeClass();
                    $(this).addClass("on");
                    //清除之前组件的数据;
                    box_div.empty();
                    for (let box_i = index; box_i < 5; box_i++) {
                        $('#a' + box_i).empty();
                    }
                    //点击时拿当项
                    if (item.children.length > 0) {
                        if (item.image != '') {
                            $("#w_img").attr('src', item.pc_img);
                        }
                        if (item.fullname) {
                            $(".show_name").text(item.fullname)
                            $(".show_desc").text(item.slogan)
                        }
                        let item_title = $("<div class='form_group'>")
                        // item_title.append("<p>" + item.nickname + "<a href=\"javascript:void(0)\" class=\"tip\">?<i style=\"display: none;\">请选择你所需要的Windows</i></a></p>")
                        let item_nickname = $("<p>" + item.nickname + "</p>")
                        if (item.annotate) {
                            let item_tip = $("<a href=\"javascript:void(0)\" class=\"tip\">?</a>")
                            let item_i = $("<i style=\"display: none;\"></i>")
                            item_i.html("<div>" + item.annotate + "</div>")
                            item_tip.append(item_i)
                            item_nickname.append(item_tip)
                        }
                        item_title.append(item_nickname)
                        box_div.append(item_title)
                        let select_box = $("<div id='' class=\"form_group\">")
                        let select_ul = $("<ul class=''/>")
                        select_box.append(select_ul)
                        box_div.append(select_box)
                        item.children.forEach((item, ii) => {
                            downItem(item, select_ul, index, for_index.concat(ii))
                        })
                    } else if (item.children.length == 0) {
                        addDownBtn(item, for_index);
                    }
                })
                // 非点击时 只拿第一项的子项
                if (item.children.length > 0 && for_index[for_index.length - 1] == 0) {
                    if (item.image != '') {
                        $("#w_img").attr('src', item.pc_img);
                    }
                    if (item.fullname) {
                        $(".show_name").text(item.fullname)
                        $(".show_desc").text(item.slogan)
                    }
                    let item_title = $("<div class='form_group'>")
                    let item_nickname = $("<p>" + item.nickname + "</p>")
                    if (item.annotate) {
                        let item_tip = $("<a href=\"javascript:void(0)\" class=\"tip\">?</a>")
                        let item_i = $("<i style=\"display: none;\"></i>")
                        item_i.html("<div class='tip_content'>" + item.annotate + "</div>")
                        item_tip.append(item_i)
                        item_nickname.append(item_tip)
                    }
                    item_title.append(item_nickname)
                    box_div.append(item_title)
                    // box_div.appendTo(".version_content")
                    let select_box = $("<div id='' class=\"form_group\">")
                    let select_ul = $("<ul class=''/>")
                    select_box.append(select_ul)
                    box_div.append(select_box)
                    item.children.forEach((item, ii) => {
                        downItem(item, select_ul, index, for_index.concat(ii))
                    })
                } else if (item.children.length == 0 && for_index[for_index.length - 1] == 0) {
                    addDownBtn(item, for_index);
                }
            }
        
            function addDownBtn(item, for_index) {
                let down_btn;
                if ($("#down_btn").length > 0) {
                    $("#down_btn").remove();
                }
                down_btn = $("<div class=\"function_btn btn_down\" id='down_btn' data='" + JSON.stringify(item) + "' index='" + for_index.join(",") + "'><div>下载</div></div>")
                down_btn.appendTo(".version_content")
                $("#home_desc").html(item.description);
            }
        } else if (lastPart === "soft.html") {
            //图片滚动列表 mengjia 070816
            var Speed = 0; //速度(毫秒)
            var Space = 10; //每次移动(px)
            var PageWidth = 850; //翻页宽度
            var fill = 0; //整体移位
            var MoveLock = false;
            var MoveTimeObj;
            var Comp = 0;
            var AutoPlayObj = null;
            var dot = 0;
            GetObj("list2").innerHTML = GetObj("list1").innerHTML;
            GetObj('ISL_Cont').scrollLeft = fill;
            GetObj("ISL_Cont").onmouseover = function() {
                clearInterval(AutoPlayObj);
            }
            GetObj("ISL_Cont").onmouseout = function() {
                // AutoPlay();
            }
            // AutoPlay();
        
            function GetObj(objName) {
                if (document.getElementById) {
                    return eval('document.getElementById("' + objName + '")')
                } else {
                    return eval('document.all.' + objName)
                }
            }
        
            function AutoPlay() { //自动滚动
                clearInterval(AutoPlayObj);
                AutoPlayObj = setInterval('ISL_GoDown();ISL_StopDown();', 3000); //间隔时间
            }
        
            function ISL_GoUp() { //上翻开始
                if (MoveLock) return;
                clearInterval(AutoPlayObj);
                MoveLock = true;
                MoveTimeObj = setInterval('ISL_ScrUp();', Speed);
                if(dot > 0){
                    dot --;
                }else{
                    dot = 2;
                }
                $('.soft_dot>ul>li').removeClass('active');
                $('.soft_dot>ul>li').eq(dot).addClass('active');
            }
        
            function ISL_StopUp() { //上翻停止
                clearInterval(MoveTimeObj);
                if (GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0) {
                    Comp = fill - (GetObj('ISL_Cont').scrollLeft % PageWidth);
                    CompScr();
                } else {
                    MoveLock = false;
                }
                // AutoPlay();
            }
        
            function ISL_ScrUp() { //上翻动作
                if (GetObj('ISL_Cont').scrollLeft <= 0) {
                    GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft + GetObj('list1').offsetWidth
                }
                GetObj('ISL_Cont').scrollLeft -= Space;
            }
        
            function ISL_GoDown() { //下翻开始
                clearInterval(MoveTimeObj);
                if (MoveLock) return;
                clearInterval(AutoPlayObj);
                MoveLock = true;
                ISL_ScrDown();
                MoveTimeObj = setInterval('ISL_ScrDown()', Speed);
                if(dot < 2){
                    dot ++;
                }else{
                    dot = 0;
                }
                $('.soft_dot>ul>li').removeClass('active');
                $('.soft_dot>ul>li').eq(dot).addClass('active');
            }
        
            function ISL_StopDown() { //下翻停止
                clearInterval(MoveTimeObj);
                if (GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0) {
                    Comp = PageWidth - GetObj('ISL_Cont').scrollLeft % PageWidth + fill;
                    CompScr();
                } else {
                    MoveLock = false;
                }
                // AutoPlay();
            }
        
            function ISL_ScrDown() { //下翻动作
                if (GetObj('ISL_Cont').scrollLeft >= GetObj('list1').scrollWidth) {
                    GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft - GetObj('list1').scrollWidth;
                }
                GetObj('ISL_Cont').scrollLeft += Space;
            }
        
            function CompScr() {
                var num;
                if (Comp == 0) {
                    MoveLock = false;
                    return;
                }
                if (Comp < 0) { //上翻
                    if (Comp < -Space) {
                        Comp += Space;
                        num = Space;
                    } else {
                        num = -Comp;
                        Comp = 0;
                    }
                    GetObj('ISL_Cont').scrollLeft -= num;
                    setTimeout('CompScr()', Speed);
                } else { //下翻
                    if (Comp > Space) {
                        Comp -= Space;
                        num = Space;
                    } else {
                        num = Comp;
                        Comp = 0;
                    }
                    GetObj('ISL_Cont').scrollLeft += num;
                    setTimeout('CompScr()', Speed);
                }
            }
        } else {

        }
    });

    $(function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/h" + "m.j" + "s?c011ff44f5dea8" + "92e6a6c2da089362f0";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    });
});