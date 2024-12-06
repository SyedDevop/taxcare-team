import { useState } from "react";
import { Plus, X } from "lucide-react";

import { Button } from "@renderer/components/ui/button";
import { Input } from "@renderer/components/ui/input";
import { toast } from "../../hooks/use-toast";

export function PerksManager() {
  const [perks, setPerks] = useState<string[]>([]);
  const [newPerk, setNewPerk] = useState("");

  const addPerk = () => {
    if (newPerk.trim()) {
      setPerks([...perks, newPerk.trim()]);
      setNewPerk("");
      toast({
        title: "Perk added",
        description: `"${newPerk.trim()}" has been added to the perks list.`,
      });
    }
  };

  const removePerk = (index: number) => {
    const updatedPerks = perks.filter((_, i) => i !== index);
    setPerks(updatedPerks);
    toast({
      title: "Perk removed",
      description: "The selected perk has been removed from the list.",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Enter a new perk"
          value={newPerk}
          onChange={(e) => setNewPerk(e.target.value)}
        />
        <Button onClick={addPerk}>
          <Plus className="mr-2 h-4 w-4" /> Add Perk
        </Button>
      </div>
      <ul className="space-y-2">
        {perks.map((perk, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-secondary p-2 rounded"
          >
            <span>{perk}</span>
            <Button variant="ghost" size="sm" onClick={() => removePerk(index)}>
              <X className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
