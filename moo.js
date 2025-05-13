import {say} from "cowsay";
const moo = name => `${say({text: `moo ${name}!`})}`;

export {moo};