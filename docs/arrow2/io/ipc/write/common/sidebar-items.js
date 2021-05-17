initSidebarItems({"fn":[["encoded_batch",""],["write_continuation","Write a record batch to the writer, writing the message size before the message if the record batch is being written to a stream"],["write_message","Write a message’s IPC data and buffers, returning metadata and buffer data lengths written"]],"struct":[["DictionaryTracker","Keeps track of dictionaries that have been written, to avoid emitting the same dictionary multiple times. Can optionally error if an update to an existing dictionary is attempted, which isn’t allowed in the `FileWriter`."],["EncodedData","Stores the encoded data, which is an gen::Schema::Message, and optional Arrow data"],["IpcWriteOptions","IPC write options used to control the behaviour of the writer"]]});