
    $(document).ready(function(){
        $('#menu li').mouseenter(function(){
            $(this).children('div').stop().fadeIn();
            $(this).siblings.children('div').stop().fadeOut();
        })

        $('#menu li').mouseout(function(){
            $(this).children('div').stop().fadeOut(200);
        })    
        // 토글
        toggle = 0 // 닫힘
        $('#toggle_img1').click(function(){
            if(toggle == 0){toggle = 1;
            $('#toggle').slideDown(300);
            $('#toggle_img1').attr({'src':'icons/toggle_x.png'})
            }

            else if(toggle == 1){toggle = 0;
                $('#toggle').hide();
                $('#toggle_img1').attr({'src':'icons/ico_user_info_line.png'})
                }
        })

        $('#search').click(function(){
            if(toggle == 0){toggle = 1;
                $('#toggle2').slideDown(300);
                $('#search').attr({'src':'icons/toggle2_x.png'})
                }
    
                else if(toggle == 1){toggle = 0;
                    $('#toggle2').slideUp(300);
                    $('#search').attr({'src':'icons/ico_search.png'})
                    }
        })

        // 스크롤
        $('#btn_top').click(function(){
            $('body,html').animate({scrollTop:0},300)
        })

        // 버튼 변경
        $('#md_pick_bt>li:nth-child(2) .md_pick_bt_off').click(function(){
            $(this).hide()
            $('#md_pick_bt>li:nth-child(1) .md_pick_bt_on').show()
            $('#md_pick_bt>li:nth-child(2) .md_pick_bt_on').hide()
            $('#md_pick_bt>li:nth-child(1) .md_pick_bt_off').show()
        })
        $('#md_pick_bt>li:nth-child(1) .md_pick_bt_off').click(function(){
            $(this).hide()
            $('#md_pick_bt>li:nth-child(2) .md_pick_bt_on').show()         
            $('#md_pick_bt>li:nth-child(1) .md_pick_bt_on').hide()
            $('#md_pick_bt>li:nth-child(2) .md_pick_bt_off').show()
        })

        $('#md_pick_bt>li:nth-child(2) .md_pick_bt_off').click(function(){
            $('#mainslide').animate({left:0},2000)
        })
        $('#md_pick_bt>li:nth-child(1) .md_pick_bt_off').click(function(){
            $('#mainslide').animate({left:-1000},2000)
        })

        $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_on2').click(function(){
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').hide()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').show()
        })

        $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').click(function(){
            $(this).hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_on2').show()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').show()
        })

        $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_on2').click(function(){
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').show()
        })

        $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').click(function(){
            $(this).hide()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_on2').show()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').show()
        })

        $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_on2').click(function(){
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').show()
        })

        $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').click(function(){
            $(this).hide()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_on2').show()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').show()
        })

        $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_on2').click(function(){
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').show()
        })

        $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').click(function(){
            $(this).hide()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_on2').show()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').show()
        })

        $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_on2').click(function(){
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').show()
        })

        $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').click(function(){
            $(this).hide()
            $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_on2').show()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').show()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_on2').hide()
            $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').show()
        })

        $('#md_pick_bt3>li:nth-child(1) .md_pick_bt_off2').click(function(){
            $('#whats_new_slide').animate({left:0},2000)
        })
        $('#md_pick_bt3>li:nth-child(2) .md_pick_bt_off2').click(function(){
            $('#whats_new_slide').animate({left:-1236},2000)
        })
        $('#md_pick_bt3>li:nth-child(3) .md_pick_bt_off2').click(function(){
            $('#whats_new_slide').animate({left:-2502},2000)
        })    
        $('#md_pick_bt3>li:nth-child(4) .md_pick_bt_off2').click(function(){
            $('#whats_new_slide').animate({left:-3748},2000)
        })  
        $('#md_pick_bt3>li:nth-child(5) .md_pick_bt_off2').click(function(){
            $('#whats_new_slide').animate({left:-5034},2000)
        })   
    })