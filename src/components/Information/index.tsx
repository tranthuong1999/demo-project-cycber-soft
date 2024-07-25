import React from 'react';
import './style.scss';
import infor_1 from '../../assets/img-infor_1.png';
import infor_2 from '../../assets/img-info-2.png';
import infor_3 from '../../assets/img-info-3.png';
import infor_4 from '../../assets/img-info-4.png';
import classNames from 'classnames';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';


const data_infor = [
    { title: "V LEARNING ?", header: "Nơi hội tụ kiến thức", desc: "ây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học trực tuyến thú vị và hấp dẫn.", img: infor_1, heightLight: "Đ" },
    { title: "CHƯƠNG TRÌNH HỌC V LEARNING", header: "Hệ thống học hàng đầu", desc: "iảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên của các trường đại học danh tiếng trong thành phố: Đại học CNTT, KHTN, Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học máy lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành trên một máy riêng.100% các buổi học đều là thực hành trên máy tính. Đào tạo với tiêu chí: “học để làm được việc”, mang lại cho học viên những kiến thức hữu ích nhất, sát với thực tế nhất.", img: infor_2, heightLight: "G" },
    { title: "TẦM NHÌN V LEARNING", header: "Đào tạo lập trình chuyên sâu", desc: "rở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành cường quốc về phát triển phần mềm.giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.", img: infor_3, heightLight: "T" },
    { title: "SỨ MỆNH V LEARNING", header: "Phương pháp đào tạo hiện đại", desc: "ử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền tảng công nghệ giáo dục, kết hợp phương pháp truyền thống, phương pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ các công ty, doanh nghiệp. Qua đó, V learning giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.", img: infor_4, heightLight: "S" },
]


const InformationPage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 900));

    return (
        <div className='information-page'>
            <div className='info-block-1'>
                <h5>V LEARNING HỌC LÀ VUI</h5>
                <h2>Cùng nhau khám phá nhưng điều mới mẻ</h2>
                <p>Học đi đôi với hành</p>
            </div>

            <div className='info-block-2'>
                <div className={classNames("list-info", isMobile ? 'list-info-mobile' : "")}>
                    {
                        data_infor.map((item, index: number) => {
                            return (
                                <div className={classNames("item-infor", `item-infor-${index + 1}`)}>
                                    <div className='img-logo'>
                                        <img src={item.img} />
                                    </div>
                                    <div className='item-content'>
                                        <p className='title-infor'>{item.title} </p>
                                        <p className='header-infor'>{item.header} </p>
                                        <p className='desc-infor'><span>{item.heightLight}</span>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default InformationPage