import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const map = new CustomMap('mapa', user.location.lat, user.location.lng);

map.putMarkers(user)
map.putMarkers(company)

console.log(user)

