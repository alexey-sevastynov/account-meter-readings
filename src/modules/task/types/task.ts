import { TaskPriorityKey } from "@/modules/task/enums/task-priority-key";
import { TaskStatusKey } from "@/modules/task/enums/task-status-key";
import { WithId } from "@/shared/types/with-id";

export interface Task extends WithId {
    title: string;
    description: string;
    status: TaskStatusKey;
    priority: TaskPriorityKey;
    isImportant?: boolean;
    tags?: string[];
}
