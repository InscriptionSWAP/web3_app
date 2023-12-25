import comingLogoIcon from '@/assets/images/coming-logo.svg'
import { useEffect } from 'react';

const ComingSoon = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return <div className="w-[100vw] h-[100vh] flex-col flex-center bg-coming-soon">
        <img className='w-[80px] h-[80px]' src={comingLogoIcon} alt="" />
        <svg width="159" height="22" viewBox="0 0 159 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.69157 17.286C5.3449 17.286 3.51157 16.6553 2.19157 15.394C0.87157 14.1327 0.21157 12.3507 0.21157 10.048C0.21157 8.47867 0.51957 7.09267 1.13557 5.89C1.76624 4.68733 2.65357 3.76333 3.79757 3.118C4.94157 2.458 6.26157 2.128 7.75757 2.128C8.9749 2.128 10.1482 2.348 11.2776 2.788L10.6836 5.626C9.68624 5.17133 8.71824 4.944 7.77957 4.944C6.4449 4.944 5.3889 5.384 4.61157 6.264C3.83424 7.12933 3.44557 8.288 3.44557 9.74C3.44557 11.2213 3.85624 12.3727 4.67757 13.194C5.4989 14.0153 6.63557 14.426 8.08757 14.426C9.0409 14.426 9.9649 14.272 10.8596 13.964L11.3436 16.67C10.2729 17.0807 9.05557 17.286 7.69157 17.286ZM18.7803 17.33C17.6363 17.33 16.6243 17.0807 15.7443 16.582C14.8789 16.0833 14.2043 15.3867 13.7203 14.492C13.2363 13.5827 12.9943 12.534 12.9943 11.346C12.9943 10.158 13.2289 9.11667 13.6983 8.222C14.1823 7.31267 14.8569 6.60867 15.7223 6.11C16.6023 5.61133 17.6143 5.362 18.7583 5.362C19.9023 5.362 20.9069 5.61133 21.7723 6.11C22.6523 6.594 23.3269 7.28333 23.7963 8.178C24.2803 9.07267 24.5223 10.1067 24.5223 11.28C24.5223 12.468 24.2803 13.524 23.7963 14.448C23.3269 15.3573 22.6523 16.0687 21.7723 16.582C20.9069 17.0807 19.9096 17.33 18.7803 17.33ZM18.7583 14.646C19.5503 14.646 20.1809 14.3453 20.6503 13.744C21.1343 13.128 21.3763 12.3213 21.3763 11.324C21.3763 10.3267 21.1343 9.53467 20.6503 8.948C20.1809 8.34667 19.5503 8.046 18.7583 8.046C17.9663 8.046 17.3283 8.34667 16.8443 8.948C16.3749 9.53467 16.1403 10.3267 16.1403 11.324C16.1403 12.3213 16.3749 13.128 16.8443 13.744C17.3283 14.3453 17.9663 14.646 18.7583 14.646ZM26.8216 5.67H29.8576V7.43C30.7523 6.05133 31.9623 5.362 33.4876 5.362C34.3529 5.362 35.0863 5.56733 35.6876 5.978C36.3036 6.374 36.7509 6.946 37.0296 7.694C37.5429 6.88733 38.1149 6.30067 38.7456 5.934C39.3909 5.55267 40.1243 5.362 40.9456 5.362C42.1629 5.362 43.1089 5.72867 43.7836 6.462C44.4729 7.18067 44.8176 8.18533 44.8176 9.476V17H41.7156V9.96C41.7156 9.37333 41.5689 8.91867 41.2756 8.596C40.9969 8.25867 40.6156 8.09 40.1316 8.09C39.5303 8.09 38.9729 8.33933 38.4596 8.838C37.9463 9.33667 37.5649 9.97467 37.3156 10.752V17H34.2136V9.96C34.2136 9.388 34.0669 8.93333 33.7736 8.596C33.4803 8.25867 33.0916 8.09 32.6076 8.09C32.0649 8.09 31.5516 8.29533 31.0676 8.706C30.5983 9.102 30.2169 9.66667 29.9236 10.4V17H26.8216V5.67ZM48.8955 0.94H52.4375V3.8H48.8955V0.94ZM47.1795 14.338H49.2915V8.332H47.1795V5.67H52.3935V14.338H54.2855V17H47.1795V14.338ZM56.3411 5.67H59.3771V7.628C59.8465 6.85067 60.3891 6.27867 61.0051 5.912C61.6211 5.54533 62.3398 5.362 63.1611 5.362C64.3785 5.362 65.3318 5.72867 66.0211 6.462C66.7105 7.18067 67.0551 8.18533 67.0551 9.476V17H63.9531V9.96C63.9531 9.37333 63.8065 8.91867 63.5131 8.596C63.2198 8.25867 62.8238 8.09 62.3251 8.09C61.7385 8.09 61.1811 8.31 60.6531 8.75C60.1251 9.19 59.7218 9.74733 59.4431 10.422V17H56.3411V5.67ZM73.4858 21.994C72.1805 21.994 70.9045 21.8253 69.6578 21.488L70.2518 18.76C71.6598 19.1707 72.8332 19.376 73.7718 19.376C74.5198 19.376 75.0918 19.2587 75.4878 19.024C75.8985 18.7893 76.1845 18.4227 76.3458 17.924C76.5218 17.4253 76.6245 16.7433 76.6538 15.878H76.5878C76.1772 16.3473 75.7005 16.7067 75.1578 16.956C74.6152 17.2053 74.0212 17.33 73.3758 17.33C72.0852 17.33 71.0732 16.846 70.3398 15.878C69.6212 14.8953 69.2618 13.5387 69.2618 11.808C69.2618 9.71067 69.7972 8.112 70.8678 7.012C71.9532 5.912 73.5005 5.362 75.5098 5.362C76.6685 5.362 78.0472 5.538 79.6458 5.89C79.6752 8.91133 79.6898 11.1847 79.6898 12.71C79.6898 14.074 79.6825 15.1007 79.6678 15.79C79.6385 17.8727 79.1105 19.4273 78.0838 20.454C77.0718 21.4807 75.5392 21.994 73.4858 21.994ZM74.1898 14.624C74.6445 14.624 75.0772 14.4553 75.4878 14.118C75.9132 13.7807 76.2872 13.304 76.6098 12.688L76.5878 8.266C76.1038 8.134 75.6345 8.068 75.1798 8.068C74.2558 8.068 73.5518 8.36867 73.0678 8.97C72.5985 9.57133 72.3638 10.444 72.3638 11.588C72.3638 12.5413 72.5178 13.2893 72.8258 13.832C73.1485 14.36 73.6032 14.624 74.1898 14.624ZM90.8954 17.286C90.0447 17.286 89.2307 17.1907 88.4534 17C87.6907 16.8093 87.0307 16.5527 86.4734 16.23L86.7374 13.282C87.3974 13.6927 88.0867 14.0153 88.8054 14.25C89.5387 14.47 90.2134 14.58 90.8294 14.58C91.5334 14.58 92.1054 14.4333 92.5454 14.14C92.9854 13.8467 93.2054 13.458 93.2054 12.974C93.2054 12.578 93.0587 12.2773 92.7654 12.072C92.4721 11.852 92.0101 11.6173 91.3794 11.368L90.8514 11.148C90.7781 11.1187 90.6974 11.0893 90.6094 11.06C90.5214 11.016 90.4187 10.972 90.3014 10.928C89.4801 10.5907 88.8201 10.2753 88.3214 9.982C87.8227 9.674 87.3901 9.24867 87.0234 8.706C86.6714 8.16333 86.4954 7.45933 86.4954 6.594C86.4954 5.186 86.9721 4.07867 87.9254 3.272C88.8787 2.46533 90.2061 2.062 91.9074 2.062C93.1981 2.062 94.5181 2.326 95.8674 2.854L95.3834 5.758C94.8407 5.45 94.2541 5.208 93.6234 5.032C93.0074 4.856 92.4207 4.768 91.8634 4.768C91.1741 4.768 90.6387 4.90733 90.2574 5.186C89.8761 5.45 89.6854 5.80933 89.6854 6.264C89.6854 6.66 89.8174 6.968 90.0814 7.188C90.3454 7.408 90.7707 7.64267 91.3574 7.892L92.2594 8.244C93.1101 8.56667 93.8141 8.882 94.3714 9.19C94.9287 9.498 95.4054 9.94533 95.8014 10.532C96.1974 11.104 96.3954 11.852 96.3954 12.776C96.3954 14.1987 95.9114 15.306 94.9434 16.098C93.9754 16.89 92.6261 17.286 90.8954 17.286ZM104.052 17.33C102.908 17.33 101.896 17.0807 101.016 16.582C100.15 16.0833 99.4757 15.3867 98.9917 14.492C98.5077 13.5827 98.2657 12.534 98.2657 11.346C98.2657 10.158 98.5004 9.11667 98.9697 8.222C99.4537 7.31267 100.128 6.60867 100.994 6.11C101.874 5.61133 102.886 5.362 104.03 5.362C105.174 5.362 106.178 5.61133 107.044 6.11C107.924 6.594 108.598 7.28333 109.068 8.178C109.552 9.07267 109.794 10.1067 109.794 11.28C109.794 12.468 109.552 13.524 109.068 14.448C108.598 15.3573 107.924 16.0687 107.044 16.582C106.178 17.0807 105.181 17.33 104.052 17.33ZM104.03 14.646C104.822 14.646 105.452 14.3453 105.922 13.744C106.406 13.128 106.648 12.3213 106.648 11.324C106.648 10.3267 106.406 9.53467 105.922 8.948C105.452 8.34667 104.822 8.046 104.03 8.046C103.238 8.046 102.6 8.34667 102.116 8.948C101.646 9.53467 101.412 10.3267 101.412 11.324C101.412 12.3213 101.646 13.128 102.116 13.744C102.6 14.3453 103.238 14.646 104.03 14.646ZM117.437 17.33C116.293 17.33 115.281 17.0807 114.401 16.582C113.535 16.0833 112.861 15.3867 112.377 14.492C111.893 13.5827 111.651 12.534 111.651 11.346C111.651 10.158 111.885 9.11667 112.355 8.222C112.839 7.31267 113.513 6.60867 114.379 6.11C115.259 5.61133 116.271 5.362 117.415 5.362C118.559 5.362 119.563 5.61133 120.429 6.11C121.309 6.594 121.983 7.28333 122.453 8.178C122.937 9.07267 123.179 10.1067 123.179 11.28C123.179 12.468 122.937 13.524 122.453 14.448C121.983 15.3573 121.309 16.0687 120.429 16.582C119.563 17.0807 118.566 17.33 117.437 17.33ZM117.415 14.646C118.207 14.646 118.837 14.3453 119.307 13.744C119.791 13.128 120.033 12.3213 120.033 11.324C120.033 10.3267 119.791 9.53467 119.307 8.948C118.837 8.34667 118.207 8.046 117.415 8.046C116.623 8.046 115.985 8.34667 115.501 8.948C115.031 9.53467 114.797 10.3267 114.797 11.324C114.797 12.3213 115.031 13.128 115.501 13.744C115.985 14.3453 116.623 14.646 117.415 14.646ZM125.478 5.67H128.514V7.628C128.983 6.85067 129.526 6.27867 130.142 5.912C130.758 5.54533 131.477 5.362 132.298 5.362C133.515 5.362 134.469 5.72867 135.158 6.462C135.847 7.18067 136.192 8.18533 136.192 9.476V17H133.09V9.96C133.09 9.37333 132.943 8.91867 132.65 8.596C132.357 8.25867 131.961 8.09 131.462 8.09C130.875 8.09 130.318 8.31 129.79 8.75C129.262 9.19 128.859 9.74733 128.58 10.422V17H125.478V5.67ZM141.215 17.748C140.599 17.748 140.063 17.5207 139.609 17.066C139.169 16.626 138.949 16.098 138.949 15.482C138.949 14.8513 139.169 14.316 139.609 13.876C140.063 13.4213 140.599 13.194 141.215 13.194C141.845 13.194 142.381 13.4213 142.821 13.876C143.261 14.316 143.481 14.8513 143.481 15.482C143.481 16.098 143.261 16.626 142.821 17.066C142.381 17.5207 141.845 17.748 141.215 17.748ZM148.605 17.748C147.989 17.748 147.454 17.5207 146.999 17.066C146.559 16.626 146.339 16.098 146.339 15.482C146.339 14.8513 146.559 14.316 146.999 13.876C147.454 13.4213 147.989 13.194 148.605 13.194C149.236 13.194 149.771 13.4213 150.211 13.876C150.651 14.316 150.871 14.8513 150.871 15.482C150.871 16.098 150.651 16.626 150.211 17.066C149.771 17.5207 149.236 17.748 148.605 17.748ZM155.996 17.748C155.38 17.748 154.844 17.5207 154.39 17.066C153.95 16.626 153.73 16.098 153.73 15.482C153.73 14.8513 153.95 14.316 154.39 13.876C154.844 13.4213 155.38 13.194 155.996 13.194C156.626 13.194 157.162 13.4213 157.602 13.876C158.042 14.316 158.262 14.8513 158.262 15.482C158.262 16.098 158.042 16.626 157.602 17.066C157.162 17.5207 156.626 17.748 155.996 17.748Z" fill="black" />
        </svg>
    </div>
}

export default ComingSoon;