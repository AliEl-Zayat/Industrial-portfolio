import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CanavesNavBar from "../CanavesNavBar/CanavesNavBar";
import { Container } from "react-bootstrap";
import "./ProjectDisplay.css";
import projectsData from "./data.json";
const ProjectDisplay = () => {
  const [projects, setProjects] = useState(projectsData.projects);
  const { id } = useParams();
  const isProject = projects.find((project) => project.id === id);
  const [readMe, setReadMe] = useState(false);
  return (
    <section id="project-details" className="project-details-ar">
      <CanavesNavBar />
      <div className="bg-green">
        <Container>
          <div className="flex-row-reverse justify-content-between">
            <div className="prod-img-wrapper">
              <img
                src={isProject.image}
                alt=""
                className="float-left img-fluid"
              />
            </div>
            <div className="header-text-wrapper">
              <h1 className="text-white">تصميم فيلا من تصميمنا</h1>
              <h3 className="text-white-50">في مكان ما...</h3>
              <p
                className={
                  readMe ? "project-brief" : "project-brief-overflowed"
                }
              >
                خلفية: سويب هي شركة إنترنت الأشياء IoT التي تسخر البيانات الضخمة
                والتعلم الآلي لتحسين الكفاءة التشغيلية في الصناعة. نحن نعتمد على
                جمع بيانات المعدات الصناعية القيمة من خلال تقنيات المستشعرات غير
                الغازية لخدمة عملائنا الصناعيين / التجاريين. إن تطوير منتجات
                تقنيات الاستشعار يغذي نمونا والابتكار أمر بالغ الأهمية لخفض
                التكاليف وتحسين القدرة. مشكلة: تتطلب مراكز الماكينات في عملية
                الإنتاج لدينا أن يتم نقل المنتج يدويًا بين مراكز الماكينة يؤدي
                هذا إلى زيادة الوقت الذي يستغرقه إنتاج المنتج ويزيد من مخاطر
                حدوث عيوب بسبب المعالجة اليدوية للمنتج. هدف: تحسين خط إنتاج
                التصنيع لعمليات التشغيل الصغيرة والمتوسطة لمكونات التصنيع
                الكهربائية والميكانيكية. قم بتحليل وتقديم توصيات للعملية الأكثر
                كفاءة في الوقت المناسب من وضع لوحة الدوائر والاختبار والتجميع
                والخدمات اللوجستية. بناء وتصنيع واختبار مكونات الأتمتة للحد من
                تفاعل المستخدم. أتمتة إنتاج المكونات المصبوبة بالحقن الميكانيكي
                وتجميعات ثنائي الفينيل متعدد الكلور وتجميع المنتج النهائي.
              </p>
              {readMe ? (
                <button
                  className="btn btn-primary"
                  onClick={() => setReadMe(!readMe)}
                >
                  اقل
                </button>
              ) : (
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setReadMe(!readMe)}
                >
                  المزيد
                </button>
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ProjectDisplay;
