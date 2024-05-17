import { Pagination as BasePagination } from 'antd'
import styled from 'styled-components'

const PaginationStyled = styled(BasePagination)`
  display: flex;
  justify-content: end;

  .ant-pagination {
    &-prev {
      display: none;
    }
    &-next {
      display: none;
    }
    &-item {
      --height: 34px;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: calc(16 / 12);
      width: var(--height);
      height: var(--height);
      color: ${({ theme }) => theme.textPrimary};
      border-color: ${({ theme }) => theme.borderGray};
      border-radius: 5px;

      a {
        color: ${({ theme }) => theme.textPrimary};
        line-height: calc(var(--height) - 2px);
      }

      &-active {
        background-color: ${({ theme }) => theme.primary};
        border-color: ${({ theme }) => theme.primary};
        transition: all 0.2s linear;

        a {
          color: white;
        }

        &:hover {
          border-color: ${({ theme }) => theme.primary};

          /* opacity: 0.8;
          a {
            color: white;
          } */
        }
      }
    }
  }
`

const Pagination = ({ ...props }) => {
  return <PaginationStyled {...props} />
}

export default Pagination
