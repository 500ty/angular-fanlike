import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { LayoutInitService, LayoutService } from '../../_metronic/core';
import KTLayoutContent from '../../../assets/js/layout/base/content';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { UserProfileService } from '../../modules/auth/_services/user-profile.service';
import { AuthService } from '../../modules/auth';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, AfterViewInit {
  // Public variables
  selfLayout = 'default';
  asideSelfDisplay: true;
  asideMenuStatic: true;
  contentClasses = '';
  contentContainerClasses = '';
  subheaderDisplay = true;
  contentExtended: false;
  asideCSSClasses: string;
  asideHTMLAttributes: any = {};
  headerMobileClasses = '';
  headerMobileAttributes = {};
  footerDisplay: boolean;
  footerCSSClasses: string;
  headerCSSClasses: string;
  headerHTMLAttributes: any = {};
  // offcanvases
  extrasSearchOffcanvasDisplay = false;
  extrasNotificationsOffcanvasDisplay = false;
  extrasQuickActionsOffcanvasDisplay = false;
  extrasCartOffcanvasDisplay = false;
  extrasUserOffcanvasDisplay = false;
  extrasQuickPanelDisplay = false;
  extrasScrollTopDisplay = false;
  @ViewChild('ktAside', {static: true}) ktAside: ElementRef;
  @ViewChild('ktHeaderMobile', {static: true}) ktHeaderMobile: ElementRef;
  @ViewChild('ktHeader', {static: true}) ktHeader: ElementRef;
  @ViewChild('modalVerifyFacebookProfile', {static: true}) modalVerifyFacebookProfile: any;

  // VerifyFacebookProfile
  formFbId: any;
  formFbIdError: boolean;
  fbid: any;
  isLoadingVerifyFacebookProfile: boolean;

  constructor(
    private initService: LayoutInitService,
    private layout: LayoutService,
    private modalService: NgbModal,
    private http: HttpClient,
    private userProfileService: UserProfileService,
    private auth: AuthService
  ) {
    this.initService.init();
  }

  ngOnInit(): void {
    // build view by layout config settings
    this.selfLayout = this.layout.getProp('self.layout');
    this.asideSelfDisplay = this.layout.getProp('aside.self.display');
    this.asideMenuStatic = this.layout.getProp('aside.menu.static');
    this.subheaderDisplay = this.layout.getProp('subheader.display');
    this.contentClasses = this.layout.getStringCSSClasses('content');
    this.contentContainerClasses = this.layout.getStringCSSClasses(
      'content_container'
    );
    this.contentExtended = this.layout.getProp('content.extended');
    this.asideHTMLAttributes = this.layout.getHTMLAttributes('aside');
    this.asideCSSClasses = this.layout.getStringCSSClasses('aside');
    this.headerMobileClasses = this.layout.getStringCSSClasses('header_mobile');
    this.headerMobileAttributes = this.layout.getHTMLAttributes(
      'header_mobile'
    );
    this.footerDisplay = this.layout.getProp('footer.display');
    this.footerCSSClasses = this.layout.getStringCSSClasses('footer');
    this.headerCSSClasses = this.layout.getStringCSSClasses('header');
    this.headerHTMLAttributes = this.layout.getHTMLAttributes('header');
    // offcanvases
    if (this.layout.getProp('extras.search.display')) {
      this.extrasSearchOffcanvasDisplay =
        this.layout.getProp('extras.search.layout') === 'offcanvas';
    }

    if (this.layout.getProp('extras.notifications.display')) {
      this.extrasNotificationsOffcanvasDisplay =
        this.layout.getProp('extras.notifications.layout') === 'offcanvas';
    }

    if (this.layout.getProp('extras.quickActions.display')) {
      this.extrasQuickActionsOffcanvasDisplay =
        this.layout.getProp('extras.quickActions.layout') === 'offcanvas';
    }

    if (this.layout.getProp('extras.cart.display')) {
      this.extrasCartOffcanvasDisplay =
        this.layout.getProp('extras.cart.layout') === 'offcanvas';
    }

    if (this.layout.getProp('extras.user.display')) {
      this.extrasUserOffcanvasDisplay =
        this.layout.getProp('extras.user.layout') === 'offcanvas';
    }

    this.extrasQuickPanelDisplay = this.layout.getProp(
      'extras.quickPanel.display'
    );

    this.extrasScrollTopDisplay = this.layout.getProp(
      'extras.scrolltop.display'
    );
  }

  ngAfterViewInit(): void {
    if (this.ktAside) {
      for (const key in this.asideHTMLAttributes) {
        if (this.asideHTMLAttributes.hasOwnProperty(key)) {
          this.ktAside.nativeElement.attributes[key] = this.asideHTMLAttributes[
            key
            ];
        }
      }
    }

    if (this.ktHeaderMobile) {
      for (const key in this.headerMobileAttributes) {
        if (this.headerMobileAttributes.hasOwnProperty(key)) {
          this.ktHeaderMobile.nativeElement.attributes[
            key
            ] = this.headerMobileAttributes[key];
        }
      }
    }

    if (this.ktHeader) {
      for (const key in this.headerHTMLAttributes) {
        if (this.headerHTMLAttributes.hasOwnProperty(key)) {
          this.ktHeader.nativeElement.attributes[
            key
            ] = this.headerHTMLAttributes[key];
        }
      }
    }
    // Init Content
    KTLayoutContent.init('kt_content');

    const user = this.auth.currentUserValue;
    console.log(user);
    if (!user.fb_id) {
      this.openModalVerifyFacebookProfile();
    }
  }

  async onUpdateProfileLink(event: any) {
    console.log(event);
    this.isLoadingVerifyFacebookProfile = true;
    this.formFbIdError = false;
    try {
      const res = await this.http.post('https://us-central1-moli-content.cloudfunctions.net/webApi/api/v1/tools/facebookIdFinder', {
        url: event
      }).toPromise();
      console.log(res);
      if (res) {
        this.fbid = res;
      } else {
        this.formFbIdError = true;
      }
    } catch (e) {
      this.fbid = null;
      this.formFbIdError = true;
    }
    this.isLoadingVerifyFacebookProfile = false;
  }

  openModalVerifyFacebookProfile() {
    this.modalService.open(this.modalVerifyFacebookProfile,
      {
        centered: true,
        backdrop: 'static'
      }
    );
  }

  async onSaveFacebookId() {
    const user = this.auth.currentUserValue;
    const userRes = await this.userProfileService.updateProfile({
      fb_id: this.fbid,
      name: user.name,
      email: user.email,
    }).toPromise();
    console.log(userRes);
    this.modalService.dismissAll();
  }
}
