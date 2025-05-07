import { Service } from "@flamework/core";
import { GlobalEvents } from "shared/network";
import { Workspace, Players } from "@rbxts/services";
import { Events } from "server/network";

@Service()
export class PartColorService {
	constructor() {
		Events.changeColor.connect(() => {
			const part = Workspace.FindFirstChild("Hello") as Part | undefined;
			print("part00");
			if (part && part.IsA("BasePart")) {
				part.Color = new Color3(0, 1, 0) as Color3;
			}
		});
	}
}
