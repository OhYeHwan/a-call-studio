import styled from "styled-components";
import { ReactComponent as EmptyIllust } from "src/static/illust/EmptyState.svg";

const Empty = () => {
  return (
    <EmptyLayout className="column justify-center items-center">
      <EmptyIllust className="empty" alt="empty-illust" />
      <EmptyDiv className="column items-center">
        <div>컨텐츠가 없습니다.</div>
        <div>상단 메뉴에서</div>
        <div>컨텐츠를 불러오세요.</div>
      </EmptyDiv>
    </EmptyLayout>
  );
};

const EmptyLayout = styled.div`
  height: 100%;
`;

const EmptyDiv = styled.div`
  margin-top: 20px;
  color: #6d778a;
  line-height: 1.5;
`;

export default Empty;
