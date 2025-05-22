import {create} from 'zustand'
import {LaneBuildItem, LaneBuildItemJSON, TabDescription} from "@/types/builds/laneBuildItem";

export interface BuildTabState {
    activeTab: string;
    tabValueList: string[];
    activeTabDescription: TabDescription[];
    tabItems: LaneBuildItem[];
    filteredTabItems: LaneBuildItem[];
    setActiveTab: (value: string) => void;
    setTabValueList: (values: string[]) => void;
    isLoading: boolean;
    isLoadingTabItems: boolean;
    error: string | null;
    errorTabItems: string | null;
    // fetch are currently not available, use "@public/data/dummyTabs.json"
    fetchTabValues: () => Promise<void>;
    fetchTabItems: () => Promise<void>;
    fetchTabDescriptions: ()=>Promise<void>;
    filterTabItems: (activeTabValue: string)=> void;
}

export const useBuildTabStore = create<BuildTabState>()((set,get)=>({
    activeTab: 'All',
    activeTabDescription: [],
    tabValueList: [],
    tabItems: [],
    filteredTabItems: [],
    isLoading: false,
    isLoadingTabItems: false,
    error: null,
    errorTabItems: null,
    setActiveTab: (by) => {
        set(() => ({activeTab: by}));
        get().filterTabItems(by)
    },
    setTabValueList: (values) => {
        set({tabValueList: values});
    },
    fetchTabValues: async ()=>{
       // set Loading state before fetch
       set({isLoading:true, error: null});

       try{
           const response = await fetch('/data/buildsTab/dummyTabs.json');
           if(!response.ok){
               throw new Error(`HTTP error! status: ${response.status}`);
           }
           const data: string[] = await response.json(); // get json
           set(()=>({
               tabValueList:data,
               isLoadingL:false // load end
           }));
       }catch(error){
           console.error(`Error fetching dummy tabs: ${error}`);
           set({
               error: error instanceof Error ? error.message : 'Unkown error',
               isLoading: false // end(error)
           })
       }
    },
    fetchTabDescriptions: async () => {
        set({isLoading:true, error: null});
        try {
            const response = await fetch('/data/buildsTab/dummyTabsDescription.json');
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: TabDescription[] = await response.json();
            set({
                activeTabDescription: data,
                isLoading: false
            })
        }catch(error){
            console.error(`Error fetching dummy tab descriptions: ${error}`);
            set({
                error: error instanceof Error ? error.message : 'Unknown error',
                isLoading: false
            })
        }
    },
    fetchTabItems: async ()=> {
        set({isLoading: true, errorTabItems: null});
        try {
            const response = await fetch('/data/buildsTab/dummyTabItems.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData: LaneBuildItemJSON[] = await response.json();

            const convertedData: LaneBuildItem[] = jsonData.map(item => ({
                ...item,
                uploadDate: new Date(item.uploadDate),
                tagList: {
                    ...item.tagList,
                    timeLine: item.tagList?.timeLine
                },
                value: item.value
            }));

            set((state) => {
                const currentActiveTab = state.activeTab;
                const updatedFilteredItem = currentActiveTab === 'All'
                    ? convertedData
                    : convertedData.filter(item => item.value === currentActiveTab);
                return {
                    tabItems: convertedData, // save all data
                    filteredTabItems: updatedFilteredItem, // updatedFilteredItems
                    isLoadingTabItems: false // load end
                }
            })
        } catch (error) {
            console.log(`Error fetching tab items in store: ${error}`);
            set({
                errorTabItems: error instanceof Error ? error.message : 'Unknown Error',
                isLoadingTabItems: false
            })
        }
    },
    // action
    filterTabItems: (activeTabValue)=>{
        set(state => {
            const allItems = state.tabItems;
            const filtered = activeTabValue === 'All'
                ? allItems
                : allItems.filter(item=> item.value === activeTabValue);
            // update [filteredTabItems] state
            return {filteredTabItems : filtered}
        });
    }

}))