import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export function Cart() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ fontSize: "1.4rem", color: "white" }}
      />
    </div>
  );
}
