import { create } from "zustand";
import { BASE_URL } from "@/lib/constant/url";

type FeedbackStore = {
  videoId: number;
  title: string;
  videoUrl: string;
  createdAt: string;
  time: number;
  gpt: string;
  script: string;
  speed: number;
  fillerWord: Record<string, number>;
  crossing_arms_count: number;
  hands_in_pockets_count: number;
  walking_actions: number;
  hand_to_face_actions: number;
  hands_behind_back_actions: number;
  getFeedback: (id: string) => Promise<void>;
};

const useFeedbackStore = create<FeedbackStore>()((set, get) => ({
  videoId: 1,
  title: "",
  videoUrl: "",
  createdAt: "",
  time: 0,
  gpt: "",
  script: "",
  speed: 0,
  fillerWord: {},
  crossing_arms_count: 0,
  hands_in_pockets_count: 0,
  walking_actions: 0,
  hand_to_face_actions: 0,
  hands_behind_back_actions: 0,
  getFeedback: async (id) => {
    const response = await fetch(BASE_URL + `api/videos/${id}`);

    if (!response.ok) {
      alert("서버에서 데이터를 가져오는데 실패했습니다.");
      return;
    }

    const { result } = await response.json();
    // const { result } = JSON.parse(
    //   '{"isSuccess":true,"code":"COMMON200","message":"성공입니다.","result":{"videoId":1,"title":"제\\n","videoUrl":"https://video-ex.s3.ap-northeast-2.amazonaws.com/1d4caf32-67b8-4f55-935c-9d61eee255ab.mp4","createdAt":"2023-11-16","crossing_arms_count":12,"hands_in_pockets_count":1,"walking_actions":1,"hand_to_face_actions":12,"hands_behind_back_actions":4,"script":" 학습자 내적과정과 수업사태를 제시해 주세요. 교사가 학습 안내를 제공하면 그게 학습 안내 제공하는 과정 아니야? 그러면은 학습자는 그걸 통해서 의미론적 부호화를 하는거죠. 맞습니다.","time":17.716825396825396,"speed":5.7572391055045875,"fillerWord":"{\\"가지고\\":0,\\"거\\":0,\\"거든\\":0,\\"거든요\\":0,\\"게\\":0,\\"그\\":0,\\"그거\\":0,\\"그게\\":1,\\"그냥\\":0,\\"그래도\\":0,\\"그래서\\":0,\\"그러고 나서\\":0,\\"그러고 보니\\":0,\\"그러고는\\":0,\\"그러니까\\":0,\\"그러다보니\\":0,\\"그러면\\":0,\\"그런 건\\":0,\\"그런 것\\":0,\\"그런데\\":0,\\"그럼\\":0,\\"그럼에도 불구하고\\":0,\\"그렇게\\":0,\\"그렇지만\\":0,\\"그리고\\":0,\\"근데\\":0,\\"기로\\":0,\\"기에\\":0,\\"나\\":0,\\"니까\\":0,\\"다\\":0,\\"더니\\":0,\\"더라\\":0,\\"더라고요\\":0,\\"되게\\":0,\\"또\\":0,\\"막뭐\\":0,\\"뭐랄까\\":0,\\"뭐지\\":0,\\"뭔가\\":0,\\"별로\\":0,\\"서요\\":0,\\"아\\":0,\\"아마\\":0,\\"아마도\\":0,\\"아무래도\\":0,\\"아무튼\\":0,\\"아서\\":0,\\"약간\\":0,\\"좀\\":0,\\"어\\":0,\\"어느\\":0,\\"어디\\":0,\\"어디까지\\":0,\\"어디로\\":0,\\"어디서\\":0,\\"어디에\\":0,\\"어때\\":0,\\"어떤\\":0,\\"어떻게\\":0,\\"어떻게 보면\\":0,\\"어떻게든\\":0,\\"어쩄든\\":0,\\"어쩌다가\\":0,\\"어쩌면\\":0,\\"어쩜\\":0,\\"어짜나\\":0,\\"에요\\":0,\\"예요\\":0,\\"왜냐하면\\":0,\\"요\\":0,\\"음\\":0,\\"이\\":0,\\"이거\\":0,\\"이게\\":0,\\"이런\\":0,\\"이런 식으로\\":0,\\"이렇게\\":0,\\"이상하게\\":0,\\"이제\\":0,\\"자\\":0,\\"저\\":0,\\"저거\\":0,\\"저게\\":0,\\"저렇게\\":0,\\"지요\\":0,\\"진짜\\":0}","gpt":"발표 동영상 분석 결과를 바탕으로 사용자에게 전달할 피드백 내용은 다음과 같습니다:\\n\\n1. 발표 동영상 길이(Time): 발표 동영상의 길이가 17.72초로 적절한 시간 내에 발표를 완료하셨습니다.\\n\\n2. 팔짱낀 횟수(crossing_arms_count): 발표 도중 12번 팔짱을 짓는 행동을 보였습니다. 팔짱은 자신감의 부족이나 불안감을 나타낼 수 있기 때문에 발표 중에는 팔짱을 풀어주시는 것이 좋습니다.\\n\\n3. 주머니에 손을 넣은 횟수(hands_in_pockets_count): 발표 중에 1번 주머니에 손을 넣은 행동을 보였습니다. 손을 주머니에 넣는 행동은 자신감의 부족을 나타낼 수 있기 때문에 발표할 때는 손을 자연스럽게 사용하는 것을 권장합니다.\\n\\n4. 걷는 동작 횟수(walking_actions): 발표 도중에 1번 걷는 동작을 보였습니다. 발표 중에는 정지된 상태로 분위기 조성에 집중하는 것이 좋습니다.\\n\\n5. 얼굴 만진 횟수(count_hand_to_face_actions): 얼굴을 만지는 횟수가 12번으로 많았습니다. 얼굴을 만지는 행동은 긴장이나 불안을 나타낼 수 있으므로 발표 중에는 자제해주시기 바랍니다.\\n\\n6. 뒷짐진 횟수(hands_behind_back_actions): 발표 중에 4번 뒷짐을 짓는 행동을 보였습니다. 뒷짐을 짓는 행동은 불안이나 불편함을 나타낼 수 있으므로 발표할 때는 편안한 자세를 유지하는 것이 좋습니다.\\n\\n위 내용은 발표 동영상 분석 결과를 바탕으로 피드백드린 내용입니다. 더 나은 발표를 위해서는 팔짱을 풀어주시고, 손을 주머니에 넣지 않으시며, 걷는 동작은 자제해주시기 바랍니다. 또한 얼굴을 자주 만지거나 뒷짐을 지지 않도록 주의해 주시기 바랍니다. 이러한 행동들은 발표를 더욱 자신감있게 전달할 수 있도록 도와줄 것입니다."}}',
    // );
    //
    // const fillerWord = JSON.parse(
    //   '{"가지고":0,"거":0,"거든":0,"거든요":0,"게":0,"그":0,"그거":0,"그게":1,"그냥":0,"그래도":3,"그래서":0,"그러고 나서":2,"그러고 보니":0,"그러고는":0,"그러니까":0,"그러다보니":0,"그러면":0,"그런 건":0,"그런 것":0,"그런데":0,"그럼":0,"그럼에도 불구하고":0,"그렇게":0,"그렇지만":0,"그리고":0,"근데":0,"기로":0,"기에":0,"나":0,"니까":0,"다":0,"더니":0,"더라":0,"더라고요":0,"되게":0,"또":0,"막뭐":0,"뭐랄까":0,"뭐지":0,"뭔가":0,"별로":0,"서요":0,"아":0,"아마":0,"아마도":0,"아무래도":0,"아무튼":0,"아서":0,"약간":0,"좀":0,"어":0,"어느":0,"어디":0,"어디까지":0,"어디로":0,"어디서":0,"어디에":0,"어때":0,"어떤":0,"어떻게":0,"어떻게 보면":0,"어떻게든":0,"어쩄든":0,"어쩌다가":0,"어쩌면":0,"어쩜":0,"어짜나":0,"에요":0,"예요":0,"왜냐하면":0,"요":0,"음":0,"이":0,"이거":0,"이게":0,"이런":0,"이런 식으로":0,"이렇게":0,"이상하게":0,"이제":0,"자":0,"저":0,"저거":0,"저게":0,"저렇게":0,"지요":0,"진짜":0}',
    // );
    const fillerWord = JSON.parse(result.fillerWord);

    console.log(result);
    console.log(fillerWord);

    set({ ...result, fillerWord });
  },
}));

export default useFeedbackStore;
