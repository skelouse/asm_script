// Path: starter/assembly/sdk/common/vars.ts
// Compare this snippet from go-sdk/common/vars.go:

// type EventType uint32

// const (
// 	EventTypeUndefined EventType = iota
// 	EventTypeHttp
// 	EventTypePubsub
// 	EventTypeP2P
// )

// func (et EventType) String() string {
// 	switch et {
// 	case EventTypeUndefined:
// 		return "EventTypeUndefined"
// 	case EventTypeHttp:
// 		return "EventTypeHttp"
// 	case EventTypePubsub:
// 		return "EventTypePubsub"
// 	case EventTypeP2P:
// 		return "EventTypeP2P"
// 	default:
// 		return "EventTypeUndefined"
// 	}
// }

export enum enumEventType {
  EventTypeUndefined = 0,
  EventTypeHttp = 1,
  EventTypePubsub = 2,
  EventTypeP2P = 3,
}
// do an enum with a method toString()
export class eventType {
    value: u32
    constructor(value: u32) {
        this.value=value
    }

    toString(): string {
        switch (this.value) {
            case 0:
                return "EventTypeUndefined"
            case 1:
                return "EventTypeHttp"
            case 2:
                return "EventTypePubsub"
            case 3:
                return "EventTypeP2P"
            default:
                return "EventTypeUndefined"
        }
    }

    isHttp(): bool {
        return this.value == enumEventType.EventTypeHttp
    }

    isPubsub(): bool {
        return this.value == enumEventType.EventTypePubsub
    }

    isP2P(): bool {
        return this.value == enumEventType.EventTypeP2P
    }
}

