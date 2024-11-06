
            //---------------------  客服 kefu.js生成-------------------
            var html = '';
            html += '<div class="customerService flo">';
            
                    html += '<a class="customerService-qq flo" target="_blank" href="https://jq.qq.com/?_wv=1027&k=DDGWjA3N" rel="nofollow">';
                    html += '<div class="customer-div"><span>QQ在线客服</span></div>';
                    html += '<div class="customer-div1"><span>QQ在线客服</span><div id="service_mobile"></div>';
                    html += '<span class="customerService-sj customerService-sj1">QQ客服：716614593 </span>';
                    html += '<span class="customerService-sj">客服时间：9:30--22:00</span><i class="customerService-icon1"></i>  <i class="customerService-icon2"></i></div>';
                     
                    html += '<a class="customerService-qqq flo" target="_blank" href="https://jq.qq.com/?_wv=1027&k=Fn2qOoU9" rel="nofollow">';   
                    html += '<div class="customer-div"><span>QQ咨询群聊</span></div>';
                    html += '<div class="customer-div1"> <span>QQ咨询群聊</span> <div id="group_pc"></div>';
                    html += '<span class="customerService-sj customerService-sj1">咨询群QQ：731984110 </span>';
                    html += '<span class="customerService-sj">客服时间：9:30--22:00</span><i class="customerService-icon1"></i><i class="customerService-icon2"></i></div></a>'; 
                 html += '</div>';
            function loadJS( url, callback ){
                var script = document.createElement('script'),
                    fn = callback || function(){};
                script.type = 'text/javascript';
                //IE
                if(script.readyState){
                    script.onreadystatechange = function(){
                        if( script.readyState == 'loaded' || script.readyState == 'complete' ){
                            script.onreadystatechange = null;
                            fn();
                        }
                    };
                }else{
                    script.onload = function(){
                        fn();
                    };
                }
                script.src = url;
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            function makeCode(tag,url) {
                $('#'+tag).qrcode({
                        render : 'canvas',    
                        text : url,   
                        width : '110',              
                        height : '110',             
                        background : '#ffffff',       
                        foreground : '#000000',       
                        src: '/images/kefu.png'             
                    });
            }
            loadJS('/js/utf.js',function(){
                 loadJS('/js/jquery.qrcode.js',function(){
                    $('body').append(html);
                    makeCode('service_mobile','https://jq.qq.com/?_wv=1027&k=DDGWjA3N');
                        
                    makeCode('group_pc','https://jq.qq.com/?_wv=1027&k=Fn2qOoU9');
                    
                    
                }); 
            });
            
                 loadJS('/js/software.js',function(){
                //banner图下载链接
                $('.custom-down.banner').attr('href',banner.url)
                });
                