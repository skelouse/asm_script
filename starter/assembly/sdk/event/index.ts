import { eventType } from "../common/vars";
import { U32 } from "../helpers";
import {Event as httpEvent} from "../http/event" ;


//@ts-ignore
@external("taubyte/sdk", "getEventType")
declare function getEventType(e: event, typeId: u32): void


export class event {
  eventNum: u32;

  constructor(e: u32) {
    this.eventNum = e;
    // do nothing
  }
  toString(): string {
    return this.eventNum.toString();
  }

  Type(): eventType {
    let f = new U32()
    getEventType(this, f.ptr)
    return new eventType(f.load())
  }

  Http(): httpEvent {
    if (this.Type().isHttp()) {
      return new httpEvent(this.eventNum)
    }

    throw new Error("Not an http event")
  }
}


