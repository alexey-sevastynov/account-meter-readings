import { TaskPriorityKey } from "@/enums/models/task-priority-key";
import { TaskStatusKey } from "@/enums/models/task-status-key";
import { WithId } from "@/types/with-id";

export interface Task extends WithId {
    title: string;
    description: string;
    status: TaskStatusKey;
    priority: TaskPriorityKey;
    isImportant?: boolean;
    tags?: string[];
}
