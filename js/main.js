   $(document).ready(function () {
      // Menu Mob
        // Apertura    
        $("#btn_menu_mob").click(function (e) { 
            e.preventDefault();
            $("#menu_mob").fadeIn(1000).addClass("js_move0");
            $("#OverlayG").fadeIn(1000);
            $("#body").addClass("d-body");
        });
    
        // Desplegable Interior  Menu Mob
            // Fotografia
                $("#btn_foto").click(function (e) { 
                    e.preventDefault();
                    // $("#Foto_desp").slideDown();
                    $("#Foto_desp").toggle();
                    // $("#menu_diseno").slideToggle();
                    $("#menu_diseno").slideUp();
                    
            });
    
            // Diseño
                $("#btn_diseno").click(function (e) { 
                    e.preventDefault();                
                    $("#menu_diseno").toggle();
                    // $("#Foto_desp").slideToggle();
                    $("#Foto_desp").slideUp();
                });
    
        // Close Menu Mob
        $("#btn_close, #OverlayG").click(function (e) { 
            e.preventDefault();
            $("#menu_mob").fadeOut(1000).removeClass("js_move0");
            $("#OverlayG").fadeOut(1000);
            $("#body").removeClass("d-body");
        });

        // Menu_Dsk
        // Desplegable
        $(".lv0 > li").mouseenter(function (e) { 
            e.preventDefault();
            $(this).find(".lv1").slideDown();
        });
        $(".lv0 > li").mouseleave(function (e) { 
            e.preventDefault();
            $(this).find(".lv1").slideUp();
        });
  


    // FOTOGRAFIA
        // Retrato Apertura
        $("#foto1R").click(function (e) { 
            e.preventDefault();
            $("#caja_foto").slideDown(500);
            $("#overlayR").fadeIn(1000);
            $("#body").addClass("d-body");
            $("#btn_close_foto").slideDown(500);            
        });

        // Retrado Close 
        $("#btn_close_foto, #overlayR").click(function (e) { 
            e.preventDefault();
            $("#caja_foto").slideUp(500);
            $("#overlayR").fadeOut(1000);
            $("#body").removeClass("d-body");
            $("#btn_close_foto").slideUp(500);  
        });

    // Pagina Web Design 
    
        // Boton mob
        $("#btn_mob_foto").click(function (e) { 
            e.preventDefault();
            setTimeout(() => { 
                $("#img_mob").slideToggle();
            }, 600);
            $("#img_tab").fadeOut(500);
            $("#img_dsk").slideUp(500);
        });

        // Boton Tab
        $("#btn_tab_foto").click(function (e) { 
            e.preventDefault();
            setTimeout(() => { 
                $("#img_tab").slideToggle();
            }, 600);
            $("#img_mob").fadeOut(500);
            $("#img_dsk").slideUp(500);
        });

        // Boton dsk
        $("#btn_dsk_foto").click(function (e) { 
            e.preventDefault();
            setTimeout(() => { 
                $("#img_dsk").slideToggle();
            }, 600);
            $("#img_mob").fadeOut(500);
            $("#img_tab").slideUp(500);
        });



        // Pagina Contacto

        $("#contacto_button").click(function (e) { 
            e.preventDefault();
           $("#OverlayG").fadeIn();
           $("#body").addClass("d-body");
           $("#modal_contacto").fadeIn();
        });

        $("#btn_close_modal, #OverlayG").click(function (e) { 
            e.preventDefault();
           $("#modal_contacto").fadeOut();
           $("#OverlayG").fadeOut();
           $("#body").removeClass("d-body");
           
        });



    


});