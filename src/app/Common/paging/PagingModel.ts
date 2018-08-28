/**
 * Created by rteam on 2017/7/17.
 */

export class JumpPageEvent {
    constructor(public PageNum: number, public Callback: (State: boolean) => void) {
    }
}

export class PagingModule {
    constructor(public PageNum: number, public PgeSize: number, public PageCount: number, public AllCount: number) {

    }
}

export class ReturnPaging<T> {
    constructor(public  Module_Page: PagingModule, public PageListInfos: T[] = []) {

    }
}
