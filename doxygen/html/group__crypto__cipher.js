var group__crypto__cipher =
[
    [ "cipher.h", "cipher_8h.html", null ],
    [ "cipher_ops", "structcipher__ops.html", [
      [ "cipher_mode", "structcipher__ops.html#a93c8c2c77d44ea013fbb6e7fd788d4d4", null ]
    ] ],
    [ "cipher_ops::[union].__unnamed0__", "unioncipher__ops_1_1_0funion_0e_8____unnamed0____.html", [
      [ "block_crypt_hndlr", "unioncipher__ops_1_1_0funion_0e_8____unnamed0____.html#acdd204e9d564e7e965099b355114a2c9", null ],
      [ "cbc_crypt_hndlr", "unioncipher__ops_1_1_0funion_0e_8____unnamed0____.html#ad1c9db049e2757215f958e6278ee2165", null ],
      [ "ccm_crypt_hndlr", "unioncipher__ops_1_1_0funion_0e_8____unnamed0____.html#af26a06451536db1c7f9abe885b6e2635", null ],
      [ "cfb_crypt_hndlr", "unioncipher__ops_1_1_0funion_0e_8____unnamed0____.html#a459d7bd5354b0aa4e3f648dd2b3433aa", null ],
      [ "ctr_crypt_hndlr", "unioncipher__ops_1_1_0funion_0e_8____unnamed0____.html#a461ec35ba4b37868eb3c6fe3c906b363", null ],
      [ "gcm_crypt_hndlr", "unioncipher__ops_1_1_0funion_0e_8____unnamed0____.html#ac65caae5798f82289a61ec41756ef2a6", null ],
      [ "ofb_crypt_hndlr", "unioncipher__ops_1_1_0funion_0e_8____unnamed0____.html#a73730f764d0125faad66fffa3fefd16c", null ]
    ] ],
    [ "cipher_ctx", "structcipher__ctx.html", [
      [ "app_sessn_state", "structcipher__ctx.html#a0439c7f7c300a59296d353e76132c028", null ],
      [ "device", "structcipher__ctx.html#a44842ea8ece2aaea4d757137cdb67b52", null ],
      [ "drv_sessn_state", "structcipher__ctx.html#a624cf985cf35b3aa8681c3892fd67429", null ],
      [ "flags", "structcipher__ctx.html#a5745811b9b08e6df51f9b8f8b14ceae7", null ],
      [ "key", "structcipher__ctx.html#affc5f0879b85b2b469ff9d54789632d6", null ],
      [ "keylen", "structcipher__ctx.html#a10dbfc431a748118c186099c249ed5e4", null ],
      [ "mode_params", "structcipher__ctx.html#ac6ac4466f7779176cac798cd6a7550b9", null ],
      [ "ops", "structcipher__ctx.html#ae3eb86d5be42450b761f89114723b682", null ]
    ] ],
    [ "cipher_ctx::[union].key", "unioncipher__ctx_1_1_0funion_0e_8key.html", [
      [ "bit_stream", "unioncipher__ctx_1_1_0funion_0e_8key.html#aaaf1469d0d9472771c7ab31e8d5227e1", null ],
      [ "handle", "unioncipher__ctx_1_1_0funion_0e_8key.html#ab5f89773e1dc03963a1a888da52013e2", null ]
    ] ],
    [ "cipher_ctx::[union].mode_params", "unioncipher__ctx_1_1_0funion_0e_8mode__params.html", [
      [ "ccm_info", "unioncipher__ctx_1_1_0funion_0e_8mode__params.html#a61d9706f5f8ce1803020dd97505d9fde", null ],
      [ "ctr_info", "unioncipher__ctx_1_1_0funion_0e_8mode__params.html#ac4eebc734f0c4d20484154701be12a3e", null ],
      [ "gcm_info", "unioncipher__ctx_1_1_0funion_0e_8mode__params.html#a82454caafb9ed687eceed2859bd98fee", null ]
    ] ],
    [ "cipher_pkt", "structcipher__pkt.html", [
      [ "ctx", "structcipher__pkt.html#a26fb877d705580648da03ce95264d100", null ],
      [ "in_buf", "structcipher__pkt.html#a56d2de56d9efc153032eb7f6503748ba", null ],
      [ "in_len", "structcipher__pkt.html#ac5c98e7edafb4b61e01f707c785afbea", null ],
      [ "out_buf", "structcipher__pkt.html#ab95bae428d3d3c80b1b8ee6ea03a05d0", null ],
      [ "out_buf_max", "structcipher__pkt.html#a6e51f941334e87cc966f5a37e783d1fc", null ],
      [ "out_len", "structcipher__pkt.html#abc9588a5f84f9daa13ce4aec965f0a91", null ]
    ] ],
    [ "gcm_params", "structgcm__params.html", [
      [ "nonce_len", "structgcm__params.html#ae4458a261310577778fca927e7fdc829", null ],
      [ "tag_len", "structgcm__params.html#a4fd478dee1eedfd75ab77e8e63bcbf40", null ]
    ] ],
    [ "ccm_params", "structccm__params.html", [
      [ "nonce_len", "structccm__params.html#adbc306823d339083ec439277a7e35e8a", null ],
      [ "tag_len", "structccm__params.html#a6a0d01056dcc05e2f7dccef25d4c5747", null ]
    ] ],
    [ "ctr_params", "structctr__params.html", [
      [ "ctr_len", "structctr__params.html#a8187ad9553ff8b223f39c14919c48b70", null ]
    ] ],
    [ "cipher_aead_pkt", "structcipher__aead__pkt.html", [
      [ "ad", "structcipher__aead__pkt.html#a1b00939c8409041b8202ae90ee01a41c", null ],
      [ "ad_len", "structcipher__aead__pkt.html#a2964d6ffbe02b7088be9a2d5c21a2f9c", null ],
      [ "pkt", "structcipher__aead__pkt.html#a4953711ca04b1c1d17980fff03561d03", null ],
      [ "tag", "structcipher__aead__pkt.html#a3c7a3e72c7d21ec574dd777ac0bdf3c4", null ]
    ] ],
    [ "block_op_t", "group__crypto__cipher.html#gae29f9c665a8fecae69d50337cf8e1974", null ],
    [ "cbc_op_t", "group__crypto__cipher.html#ga198125c12278864dc31e7cbb2e1271a3", null ],
    [ "ccm_op_t", "group__crypto__cipher.html#gac7c0f9d5f45cd1718767e934261da6c3", null ],
    [ "cfb_op_t", "group__crypto__cipher.html#ga6bcb7d08d7a1bbb7186c5900e5725242", null ],
    [ "cipher_completion_cb", "group__crypto__cipher.html#ga8a1c21d6d39106d33ddaf63bca719222", null ],
    [ "ctr_op_t", "group__crypto__cipher.html#gaaed6f921219fc9071810baac789f41e9", null ],
    [ "gcm_op_t", "group__crypto__cipher.html#gae0e79c23fd8bc6e50b56586aa17c03fc", null ],
    [ "ofb_op_t", "group__crypto__cipher.html#gaa4f8430c2c288bfc10422f6273aaf4fb", null ],
    [ "cipher_algo", "group__crypto__cipher.html#gaa43d9907b508cb28c649aaa524d84424", [
      [ "CRYPTO_CIPHER_ALGO_AES", "group__crypto__cipher.html#ggaa43d9907b508cb28c649aaa524d84424aed0c05202ecbb1496f84ec6c383ddcf0", null ]
    ] ],
    [ "cipher_mode", "group__crypto__cipher.html#gaeedaf8017f8d6518f7dedef365bbae43", [
      [ "CRYPTO_CIPHER_MODE_ECB", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43a30ffc1c7c1489f938ed8c567a4fb885e", null ],
      [ "CRYPTO_CIPHER_MODE_CBC", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43a98034da3b89ae5c47749c59a3b15bbfd", null ],
      [ "CRYPTO_CIPHER_MODE_CTR", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43a58823b401487d57d62a067d71bd2e9d2", null ],
      [ "CRYPTO_CIPHER_MODE_CCM", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43a5116e1683b8c9c26582863a65128ce3b", null ],
      [ "CRYPTO_CIPHER_MODE_GCM", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43a2f0de7c8f0b9c1a8ac7343ca3ca72c12", null ],
      [ "CRYPTO_CIPHER_MODE_CFB", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43ae8b346d201fa958d301b846f12ebe06a", null ],
      [ "CRYPTO_CIPHER_MODE_OFB", "group__crypto__cipher.html#ggaeedaf8017f8d6518f7dedef365bbae43ab2f91833207039719131357a81fb55a3", null ]
    ] ],
    [ "cipher_op", "group__crypto__cipher.html#ga1db3a5604bff0669672af4457aaaee21", [
      [ "CRYPTO_CIPHER_OP_DECRYPT", "group__crypto__cipher.html#gga1db3a5604bff0669672af4457aaaee21a1e1205f695285034b4889ac19a191617", null ],
      [ "CRYPTO_CIPHER_OP_ENCRYPT", "group__crypto__cipher.html#gga1db3a5604bff0669672af4457aaaee21a71bf6ee186bab1729e24e37c119d0019", null ]
    ] ],
    [ "cipher_begin_session", "group__crypto__cipher.html#ga0720700438ba5819aa826aa37f0c4227", null ],
    [ "cipher_block_op", "group__crypto__cipher.html#ga05a2569f8d404593e053ce69817a457e", null ],
    [ "cipher_callback_set", "group__crypto__cipher.html#gaaf0add27d9116f584e7bbc2d8f1eb39b", null ],
    [ "cipher_cbc_op", "group__crypto__cipher.html#ga2c4ac483eb4e11110be939e669040700", null ],
    [ "cipher_ccm_op", "group__crypto__cipher.html#ga4886e7e1cc2fcff411066875b35b8b45", null ],
    [ "cipher_cfb_op", "group__crypto__cipher.html#gaca8a543c5e1b0bd8d4a6a8982cca8d8c", null ],
    [ "cipher_ctr_op", "group__crypto__cipher.html#gaeffb9d5dd85bf135eb2cca6d47cb373c", null ],
    [ "cipher_free_session", "group__crypto__cipher.html#gaa818a3de1f2d6319cd21bf6b7caf7cbb", null ],
    [ "cipher_gcm_op", "group__crypto__cipher.html#ga3706b034252e40b818a782c28ba5e485", null ],
    [ "cipher_ofb_op", "group__crypto__cipher.html#gaa7772d10a48395f93eb035480de15308", null ]
];