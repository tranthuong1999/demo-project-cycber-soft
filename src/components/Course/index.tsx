
import React from 'react'
import "./style.scss"
import DoneIcon from '@mui/icons-material/Done';
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';


const Course = () => {
    const theme = useTheme();
    const isTabnet = useMediaQuery(theme.breakpoints.down(1024));

    return (
        <div className='course'>
            <div className='course-detail'>
                <div className={classNames("info-course-home", isTabnet ? "info-course-home-tabnet" : "")} >
                    <div className='infor-item-home infor-large-item'>
                        <h3> Khóa học</h3>
                        <p>
                            <span style={{ fontWeight: 700 }}>Học qua dự án thực tế</span>
                            ,học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay"
                        </p>
                        <ul>
                            <li className='item-detail-infor'>  <i className="fas fa-check" />  <span>Hơn 1000 bài tập và dự án thực tế</span></li>
                            <li className='item-detail-infor'>  <i className="fas fa-check" />  <span>Công nghệ cập nhật mới nhất</span></li>
                            <li className='item-detail-infor'> <i className="fas fa-check" />   <span>Hình ảnh, ví dụ, bài giảng sinh động trực quan </span></li>
                            <li className='item-detail-infor'> <i className="fas fa-check" />   <span>Tư duy phân tích, giải quyết vấn đề trong dự án</span></li>
                            <li className='item-detail-infor'> <i className="fas fa-check" />   <span>Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án </span></li>
                            <li className='item-detail-infor'> <i className="fas fa-check" />   <span>Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</span></li>
                        </ul>

                    </div>
                    <div className='infor-item-home infor-small-item-A'>
                        <div className='infor-item-content'>
                            <h3> Lộ trình phù hợp</h3>
                            <ul>
                                <li className='item-detail-infor'>
                                    <i className="fas fa-check" /> <span>Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</span></li>
                                <li className='item-detail-infor'>
                                    <i className="fas fa-check" />  <span>Học, luyện tập code, kỹ thuật phân tích, soft skill</span>
                                </li>
                                <li className='item-detail-infor'>
                                    <i className="fas fa-check" />  <span>Huấn luyện để phát triển năng lực và niềm đam mê lập trình</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='infor-item-home infor-small-item-B'>

                        <div className='infor-item-content'>
                            <h3> HỆ THỐNG HỌC TẬP</h3>
                            <ul>
                                <li className='item-detail-infor'><i className="fas fa-check" />  <span> Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</span></li>
                                <li className='item-detail-infor'><i className="fas fa-check" />  <span> Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</span></li>
                                <li className='item-detail-infor'><i className="fas fa-check" />  <span> Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập</span></li>
                            </ul>
                        </div>

                    </div>
                    <div className='infor-item-home infor-small-item-A'>
                        <div className='infor-item-content'>
                            <h3> GIẢNG VIÊN</h3>
                            <ul>
                                <li className='item-detail-infor'><i className="fas fa-check" />  <span> Tương tác cùng mentor và giảng viên qua phần thảo luận</span></li>
                                <li className='item-detail-infor'><i className="fas fa-check" />  <span>Review code và đưa ra các nhận xét góp ý</span></li>
                                <li className='item-detail-infor'><i className="fas fa-check" />  <span>Chấm điểm tương tác thảo luận giữa các học viên</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='infor-item-home infor-small-item-C'>
                        <div className='infor-item-content'>
                            <h3> CHỨNG NHẬN</h3>
                            <ul>
                                <li className='item-detail-infor'><i className="fas fa-check" />  <span> Chấm bài và có thể vấn đáp trực tuyến để review</span></li>
                                <li className='item-detail-infor'><i className="fas fa-check" />  <span>Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</span></li>
                                <li className='item-detail-infor'><i className="fas fa-check" />  <span> Kết nối CV của bạn đến với các đối tác của V learning</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course