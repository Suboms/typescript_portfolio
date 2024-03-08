export interface Work {
  id: number;
  title: string;
  description: string;
  github_link: string;
  live_link?: string;
}


export const work_list:Work[] = []

export function addWork(work:Work):Work[]{
    work_list.push(work)
    return work_list
}