import { StringHelper, U32 } from "../helpers";

//@ts-ignore
@external("taubyte/sdk", "eventHttpWrite")
declare function eventHttpWrite(eventId: u32, bufPtr: u32, bufSize: u32, n: u32): u32

export class Event {
    eventNum: u32;
  
    constructor(e: u32) {
      this.eventNum = e;
      // do nothing
    }
    toString(): string {
      return this.eventNum.toString();
    }

    Write(value: string): u32 {
        let str = new StringHelper(value)
        let str_n = new U32()
        let err = eventHttpWrite(this.eventNum, str.Ptr(), str.Len(), str_n.ptr)
        if (err != 1) {
            throw new Error("Error writing to event: " + err.toString())
        }

        return str_n.load()
    }
  }