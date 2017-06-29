import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from './../dashboard.service';
import { Dashboard } from './../dashboard';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {
    sideBarIsHide: boolean = false;
    ManuelSideBarIsHide: boolean = false;
    ManuelSideBarIsState: boolean = false;
    isMobile = window.matchMedia("only screen and (max-width: 768px)");
    cookies: string = null;
    dashboard: Dashboard[];

    constructor(
      private router: Router,
      private dashboardService: DashboardService
      ) {}

    resizeSidebarManually(){
		this.ManuelSideBarIsHide = true;
		if (!this.ManuelSideBarIsState) {
        this.resizeSidebar("1");
        this.ManuelSideBarIsState = true;
        } else {
            this.resizeSidebar("0");
            this.ManuelSideBarIsState = false;
        }
	}

	resizeSidebar(op: string):void{
		if (op == "1") {
      $(".ui.sidebar.left").addClass("very thin icon");
      $(".navslide").addClass("marginlefting");
      $(".sidebar.left span").addClass("displaynone");
      $(".sidebar .accordion").addClass("displaynone");
      $(".ui.dropdown.item.displaynone").addClass("displayblock");
      $($(".logo img")[0]).addClass("displaynone");
      $($(".logo img")[1]).removeClass("displaynone");
      $(".hiddenCollapse").addClass("displaynone");
    } else {
      $(".ui.sidebar.left").removeClass("very thin icon");
      $(".navslide").removeClass("marginlefting");
      $(".sidebar.left span").removeClass("displaynone");
      $(".sidebar .accordion").removeClass("displaynone");
      $(".ui.dropdown.item.displaynone").removeClass("displayblock");
      $($(".logo img")[1]).addClass("displaynone");
      $($(".logo img")[0]).removeClass("displaynone");
      $(".hiddenCollapse").removeClass("displaynone");
    }
	}

	colorize():void{
		var a;
    var b;
    var d;
    var z;
    var l;

    if (this.cookies) {
        if (b == null) {
            b = $(".sidebar").attr("data-color");
        }
        $(".sidemenu").removeClass(b).addClass(this.cookies);
        $(".sidebar").attr("data-color", this.cookies);
    }

    if (this.cookies) {
        if (z == null) {
            z = $(".navslide .menu").attr("data-color");
        }
        $(".navslide .menu").removeClass(z).addClass(this.cookies);
        $(".navslide .menu").attr("data-color", this.cookies);
    }



    $(".colorlist li a").on("click", (b) => {
        var c = $(this).attr("data-addClass");
        if (l == null) {
            l = $(".navslide .menu").attr("data-color");
        }
        console.log(l);
        $(".navslide .menu").removeClass(l).addClass(c);
        l = c;
        this.cookies = c;
    });
    $(".sidecolor li a").on("click", (a) => {
        var c = $(this).attr("data-addClass");
        // a.preventDefault();
        if (d == null) {
            d = $(".sidebar").attr("data-color");
        }
        $(".sidemenu").removeClass(d).addClass(c);
        $(".accordion").removeClass("inverted").addClass("inverted");
        this.cookies = c;
        d = c;
    });
    $(".colorize").popup({
        on: "click"
    });
	}

    ngOnInit() {
        setTimeout(()=>{
            this.algo();
        },2000);
        this.dashboardService.getDashboard().subscribe((dashboard)=>{
            this.dashboard = dashboard;
        });
    }

  algo():void{

    if (this.isMobile.matches) {
			this.resizeSidebar("1");
			$("body")
				.getNiceScroll()
				.remove();
			$(".sidebar")
				.getNiceScroll()
				.remove();

			$(".computer.only").toggleClass("displaynone");
			$(".colhidden").toggleClass("displaynone");
		} else {
			$("body").niceScroll({
				cursorcolor: "#3d3b3b",
				cursorwidth: 5,
				cursorborderradius: 0,
				cursorborder: 0,
				scrollspeed: 50,
				autohidemode: true,
				zindex: 9999999
			});
			$(".sidebar").niceScroll({
				cursorcolor: "#3d3b3b",
				cursorwidth: 2,
				cursorborderradius: 0,
				cursorborder: 0,
				scrollspeed: 50,
				autohidemode: true,
				zindex: 9999999
			});

			$(".displaynone .menu").niceScroll({
				cursorcolor: "#3d3b3b",
				cursorwidth: 5,
				cursorborderradius: 0,
				cursorborder: 0,
				scrollspeed: 50,
				autohidemode: true,
				zindex: 9999999
			});
		}

		$('.ui.right.sidebar').sidebar({
      context: $('#contextWrap .pusher'),
      transition: 'slide out',
      silent: true
    }).sidebar('attach events', '.rightsidebar');

		$(".ui.dropdown").dropdown({
			allowCategorySelection: true,
			transition: "fade up"
		});
		$('.ui.accordion').accordion({
			selector: {}
		});

		this.colorize();
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
    $(".ui.rating").rating(); //rating trigger
    $('.tabular .item').tab();
    $(".hamburger").on("click", function() {
        this
            .classList
            .toggle("is-active");
    });
    $('.ui.embed').embed();
  }

    ngAfterViewInit(){
	}

}
