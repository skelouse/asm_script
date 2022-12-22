// U32 type for allocating and loading u32 value pointers
export class U32 {
    ptr: u32;
    constructor() {
      //@ts-ignore
      this.ptr = u32(__alloc(sizeof<u32>()));
    }
    load(): u32 {
      return load<u32>(this.ptr)
    }
    send(): u32 {
      return this.ptr
    }
    log(): void {
      console.log(this.load().toString())
    }
  }
  
  // StringHelper uses for passing bufPtr and bufLen of a uint8 array representation of a string
  export class StringHelper {
    bufPtr: usize;
    bufLen: u32;
    constructor(str: string) {
      let buf = String.UTF8.encode(str);
      this.bufPtr = changetype<usize>(buf);
      this.bufLen = buf.byteLength;
    }
    Ptr(): u32 {
      return u32(this.bufPtr)
    }
  
    Len(): u32 {
      return this.bufLen
    }
  }