import { Auth } from "./modules/Auth.ts";
import { Main } from "@shared/lib/api/modules/Main.ts";
import { Edu } from "@shared/lib/api/modules/Edu.ts";


export class API {
	static Auth = Auth
	static Main = Main
	static Edu = Edu
}
