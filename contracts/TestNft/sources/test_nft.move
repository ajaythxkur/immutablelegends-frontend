module nft_admin::test_nft {

    use std::string;
    use std::string::String;
    use aptos_token::token;

    const COLLECTION: vector<u8> = b"Immutable Legends";
    const EMPTY: vector<u8> = b"";
    const URI: vector<u8> = b"https://cryptologos.cc/logos/aptos-apt-logo.png";

    fun init_module(creator: &signer) {
        token::create_collection(
            creator,
            string::utf8(COLLECTION),
            string::utf8(EMPTY),
            string::utf8(URI),
            100,
            vector[true, true, true]
        );
    }

    entry fun mint(creator: &signer, name: String) {
        token::create_token_script(
            creator,
            string::utf8(COLLECTION),
            name,
            string::utf8(EMPTY),
            1,
            1,
            string::utf8(URI),
            @nft_admin,
            100,
            100,
            vector[true, true, true, true, true],
            vector[],
            vector[],
            vector[]
        );
    }
}
