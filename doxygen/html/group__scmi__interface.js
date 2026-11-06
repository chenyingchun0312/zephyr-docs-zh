var group__scmi__interface =
[
    [ "传输层", "group__scmi__transport.html", "group__scmi__transport" ],
    [ "协议", "group__scmi__protocols.html", "group__scmi__protocols" ],
    [ "实用工具", "group__scmi__util.html", "group__scmi__util" ],
    [ "protocol.h", "drivers_2firmware_2scmi_2protocol_8h.html", null ],
    [ "scmi_protocol", "structscmi__protocol.html", [
      [ "data", "structscmi__protocol.html#ad6c1e08eebc96ff76ae656510d04a9d5", null ],
      [ "events", "structscmi__protocol.html#a1b414028a899b5bef9c4df38352c5928", null ],
      [ "id", "structscmi__protocol.html#ae2c2026eeaad8c5bf73be885fdd6315c", null ],
      [ "rx", "structscmi__protocol.html#a4580aabc67a32be7dc9e914dd863a90b", null ],
      [ "transport", "structscmi__protocol.html#a9081097c7aa12c407ec1d837c541d666", null ],
      [ "tx", "structscmi__protocol.html#aa2a78f57d21a573c6091fba89a757a52", null ],
      [ "version", "structscmi__protocol.html#a809979e1c761c8486d62a4af6a21b4ad", null ]
    ] ],
    [ "scmi_protocol_events", "structscmi__protocol__events.html", [
      [ "cb", "structscmi__protocol__events.html#a5ea92cc3ee5da51882568cc464378a7b", null ],
      [ "evts", "structscmi__protocol__events.html#ac04442b926499369d7c89d8aacf0da41", null ],
      [ "num_events", "structscmi__protocol__events.html#a33fb7a3e095fb1ad5267080130277578", null ]
    ] ],
    [ "scmi_protocol_version", "structscmi__protocol__version.html", null ],
    [ "scmi_protocol_version::[union].__unnamed0__", "unionscmi__protocol__version_1_1_0funion_0e_8____unnamed0____.html", [
      [ "raw", "unionscmi__protocol__version_1_1_0funion_0e_8____unnamed0____.html#a6c190d60373b298f7c2b03930879500e", null ]
    ] ],
    [ "scmi_protocol_version::[struct].__unnamed0__.__unnamed0__", "structscmi__protocol__version_1_1_0fstruct_0e_8____unnamed0_____8____unnamed0____.html", [
      [ "major", "structscmi__protocol__version_1_1_0fstruct_0e_8____unnamed0_____8____unnamed0____.html#a6411da9b0b3d1bd7d2008656962510d7", null ],
      [ "minor", "structscmi__protocol__version_1_1_0fstruct_0e_8____unnamed0_____8____unnamed0____.html#a26d99342a722ff555dc47dadf35279b8", null ]
    ] ],
    [ "scmi_message", "structscmi__message.html", [
      [ "content", "structscmi__message.html#ae868ec173129a6f81c895279e95bb52d", null ],
      [ "hdr", "structscmi__message.html#a4b329136651a527d51310af82dc24795", null ],
      [ "len", "structscmi__message.html#aad4f7713d97765414e21a4cb6ed4b01f", null ]
    ] ],
    [ "SCMI_MESSAGE_HDR_MAKE", "group__scmi__interface.html#ga100155d2238e9f860e2cab8ad8209a8a", null ],
    [ "SCMI_MESSAGE_HDR_TAKE_MSGID", "group__scmi__interface.html#ga434a417ef8751e84b88eb4204974cc09", null ],
    [ "SCMI_MESSAGE_HDR_TAKE_PROTOCOL", "group__scmi__interface.html#gab1105b614d2ae1307826c48f86cb80ce", null ],
    [ "SCMI_MESSAGE_HDR_TAKE_TOKEN", "group__scmi__interface.html#ga5276d897f75f150887e4958b0c7eabe2", null ],
    [ "SCMI_MESSAGE_HDR_TAKE_TYPE", "group__scmi__interface.html#ga24dffd8abf8f25b6a7bc6b68ddf6e380", null ],
    [ "SCMI_SHORT_NAME_MAX_SIZE", "group__scmi__interface.html#gaff6ceb886b06b1187018d8a2b8dd73e3", null ],
    [ "scmi_protocol_event_callback", "group__scmi__interface.html#ga8c91d5a58df19aaa59b7dcfaea22649a", null ],
    [ "scmi_message_type", "group__scmi__interface.html#ga0c1b38acb21bc918714720c781e50d77", [
      [ "SCMI_COMMAND", "group__scmi__interface.html#gga0c1b38acb21bc918714720c781e50d77af5bbe670cc662bb4fe577d3b4c43acb8", null ],
      [ "SCMI_DELAYED_REPLY", "group__scmi__interface.html#gga0c1b38acb21bc918714720c781e50d77ae7a8eede3c6a972ad74fc98697b36668", null ],
      [ "SCMI_NOTIFICATION", "group__scmi__interface.html#gga0c1b38acb21bc918714720c781e50d77a3f8a2a47929b4de637a158dd1c401e04", null ]
    ] ],
    [ "scmi_status_code", "group__scmi__interface.html#ga451a39b7d2f3ffafa9d69b21c7e249b2", [
      [ "SCMI_SUCCESS", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2a000bdbba75d33395490777f1955069c4", null ],
      [ "SCMI_NOT_SUPPORTED", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2adcd09f6ee2b372fe3d854b632dad8089", null ],
      [ "SCMI_INVALID_PARAMETERS", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2a2b12279fd4910a2bb349fe26d51772b0", null ],
      [ "SCMI_DENIED", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2abf54857fe736374a01ec720f595b38bf", null ],
      [ "SCMI_NOT_FOUND", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2a86b3facf8608f0a1a50a15702a81abcc", null ],
      [ "SCMI_OUT_OF_RANGE", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2a7ec843eac30888df53a4142c8a4fb18e", null ],
      [ "SCMI_BUSY", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2a31062d59e627c538943d9b180f2bbdaa", null ],
      [ "SCMI_COMMS_ERROR", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2aec1bdf1af231aaf8fecf1cbfdf80ee8d", null ],
      [ "SCMI_GENERIC_ERROR", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2a39691c371b8f8c309522ddfe217ec763", null ],
      [ "SCMI_HARDWARE_ERROR", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2a5b133193f0ad79541b3c7ca7ff7086b6", null ],
      [ "SCMI_PROTOCOL_ERROR", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2a7f05e2ce40670eac59c9d66913f6f0d4", null ],
      [ "SCMI_IN_USE", "group__scmi__interface.html#gga451a39b7d2f3ffafa9d69b21c7e249b2ad9a7e0568754ed38d498f95b56af4a60", null ]
    ] ],
    [ "scmi_protocol_attributes_get", "group__scmi__interface.html#gac6afb98180e88ade7d235a96e72b7ca6", null ],
    [ "scmi_protocol_get_version", "group__scmi__interface.html#gaa97701c4c038fa5403e5696ac84e6149", null ],
    [ "scmi_protocol_message_attributes_get", "group__scmi__interface.html#ga0f5d5c4382c41a507b21741e88cbcac0", null ],
    [ "scmi_protocol_version_negotiate", "group__scmi__interface.html#gae58fdab329d4f0d2a4b16c6f2a668fe6", null ],
    [ "scmi_read_message", "group__scmi__interface.html#gae5326d8ffd8fc7ed76ba73a0aee95d49", null ],
    [ "scmi_send_message", "group__scmi__interface.html#gacba26fb193852024636dda1e4ef0ee53", null ],
    [ "scmi_status_to_errno", "group__scmi__interface.html#gaec0ffd1352d0106633fd15be8fc20aa2", null ]
];