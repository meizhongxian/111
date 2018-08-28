import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JumpPageEvent} from "./PagingModel";

@Component({
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

    /**
     * 第几页
     */
    @Input() PageNum: number;
    /**
     * 每页几条数据
     */
    @Input() PageSize: number;
    /**
     * 总共几条数据
     */
    @Input() AllCount: number;
    /**
     * 总共几页
     */
    @Input() PageCount: number;

    @Output('JumpPage')
    JumpPage: EventEmitter<JumpPageEvent> = new EventEmitter<JumpPageEvent>();

    constructor() {
    }

    ngOnInit() {
    }

    LoadPage(PageNum: number) {
        if (PageNum > this.PageCount || PageNum <= 0 || PageNum === this.PageNum)
            return;


        this.JumpPage.emit(new JumpPageEvent(PageNum, (State: boolean) => {
            if (State)
                this.PageNum = PageNum;
        }));
    }
}
