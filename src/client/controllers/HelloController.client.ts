import { Controller } from "@flamework/core";

@Controller()
export class HelloController {
	constructor() {
		print("HelloController started!");
	}
}
