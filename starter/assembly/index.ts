import { event } from "./sdk/event/index";
import { U32, StringHelper } from "./sdk/helpers";

export function doStuff(e: event): u32 {
  try {
    e.Http().Write("hello, world!");
  } catch (e) {
    if (typeof e === "string") {
      console.log(e.toString());
    } else if (e instanceof Error) {
      console.log(e.message.toString()); // works, `e` narrowed to Error
    }
  }

  // let str = new StringHelper("Hello, world!")
  // let str_n = new U32()
  // eventHttpWrite(e.eventNum, str.Ptr(), str.Len(), str_n.ptr)
  // str_n.log()

  return 0;
}
