import {LaneBuildItemTagList} from "@/types/builds/laneBuildItem";

const isValidTagValue = <K extends keyof LaneBuildItemTagList>(key: K, value: unknown): value  is NonNullable<LaneBuildItemTagList[K]> => {

}