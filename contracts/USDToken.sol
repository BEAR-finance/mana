pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/PausableToken.sol";
import "zeppelin-solidity/contracts/token/MintableToken.sol";
import "./BurnableToken.sol";

contract USDToken is BurnableToken, PausableToken, MintableToken {

    string public constant symbol = "USD";

    string public constant name = "Bearland USD by bears.finance";

    uint8 public constant decimals = 18;

    function burn(uint256 _value) whenNotPaused public {
        super.burn(_value);
    }
}
