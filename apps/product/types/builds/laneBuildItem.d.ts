export interface LaneBuildItem{
    value: string;
    icon: string;
    title: string;
    tagList: LaneBuildItemTagList;
    likes: number;
    uploadDate: Date;
    uploader: string;
}

export interface LaneBuildItemJSON extends Omit<LaneBuildItem, 'uploadDate'| 'tagList'>{
    uploadDate: string;
    tagList:{
        timeLine: string;
        members?: number;
        difficulty?: 'easy' | 'normal' | 'hard';
    }
}

export interface LaneBuildItemTagList{
    timeLine?: string;
    members?: number;
    difficulty?: 'easy' | 'normal' | 'hard';
}

export interface TabDescription {
    value: string;
    desc: string;
}