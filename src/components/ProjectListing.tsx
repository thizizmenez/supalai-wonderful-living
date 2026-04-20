import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Project {
  name: string;
  link: string;
  thumbnail: string;
}

const UTM = '/?utm_source=website&utm_medium=landingpage&utm_campaign=supalaiwonderful';

const NEW_PROJECTS = new Set([
  'ศุภาลัย พรีเมียร์ ตากสิน-วงเวียนใหญ่',
  'ศุภาลัย ลอฟท์ ท่าพระ อินเตอร์เชนจ์',
  'ศุภาลัย บลู สาทร-ราชพฤกษ์',
  'ศุภาลัย ธาม เจริญนคร',
  'ศุภาลัย เซนส์ พัทยา',
  'ศุภาลัย คราม ศรีสุนทร ภูเก็ต',
]);

const projectsByLocation: Record<string, Project[]> = {
  'กรุงเทพและปริมณฑล': [
    { name: 'ศุภาลัย เวอเรนด้า รามคำแหง', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%B2-%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B3%E0%B9%81%E0%B8%AB%E0%B8%87' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_point/o0x0/x8/r5/v9yix8r5cgm/DJI_0446.jpg' },
    { name: 'ศุภาลัย ซิตี้ รีสอร์ท สุขุมวิท 107', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B8%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%97-107' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/vm/gy/zh8xvmgyjaq/DJI_0100.jpg' },
    { name: 'ศุภาลัย เวอเรนด้า สุขุมวิท 117', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%B2-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B8%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%97-117' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/hg/m0/l13uhgm0hon/DJI_04311.png' },
    { name: 'ศุภาลัย โอเรียนทัล สุขุมวิท 39', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%82%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B8%A5-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B8%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%9739' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/xi/nl/sa4dxinlmxk/Architecture_Night_Shot_(1).jpg' },
    { name: 'ศุภาลัย ปาร์ค เอกมัย-พัฒนาการ', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9B%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84-%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%A1%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/xj/t5/is3yxjt5oku/OVERALL-(1).jpg' },
    { name: 'ศุภาลัย ไอคอน สาทร', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%84%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%99-%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/hq/ab/7wjwhqabmsp/Drone_Shot%201.jpg' },
    { name: 'ศุภาลัย ซิตี้ รีสอร์ท จรัญฯ 91', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B8%88%E0%B8%A3%E0%B8%B1%E0%B8%8D%E0%B8%AF-91' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/de/vl/druidevlafo/PoolB-006(%e0%b9%81%e0%b8%81%e0%b9%89002).jpg' },
    { name: 'ศุภาลัย ปาร์ค สถานีแยกไฟฉาย', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9B%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%84%E0%B8%9F%E0%B8%89%E0%B8%B2%E0%B8%A2' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/k6/bi/onpck6bidun/DJI_0598.jpg' },
    { name: 'ศุภาลัย พรีเมียร์ สามเสน-ราชวัตร', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C-%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%AA%E0%B8%99-%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%A3' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/0n/5n/wyse0n5numl/_VPX6025-Panorama.png' },
    { name: 'ศุภาลัย พรีเมียร์ ตากสิน-วงเวียนใหญ่', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C-%E0%B8%95%E0%B8%B2%E0%B8%81%E0%B8%AA%E0%B8%B4%E0%B8%99-%E0%B8%A7%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/ey/3i/0oapey3icpl/EX_Maingate.jpg' },
    { name: 'ศุภาลัย ลอฟท์ ท่าพระ อินเตอร์เชนจ์', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A5%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8A%E0%B8%99%E0%B8%88%E0%B9%8C' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/dz/k9/qy3pdzk9le4/Final--%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2-007.jpg' },
    { name: 'ศุภาลัย ไลท์ ท่าพระ-วงเวียนใหญ่', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%84%E0%B8%A5%E0%B8%97%E0%B9%8C-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0-%E0%B8%A7%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/ci/e0/br2fcie04ny/_DSC0096.jpg' },
    { name: 'ศุภาลัย บลู สาทร-ราชพฤกษ์', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9A%E0%B8%A5%E0%B8%B9-%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3-%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9E%E0%B8%A4%E0%B8%81%E0%B8%A9%E0%B9%8C' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/nj/c2/8nf0njc2uqy/670612_overall_%E0%B8%9E%E0%B8%A5%E0%B8%9A%E0%B8%84%E0%B9%88%E0%B8%B3_005.jpg' },
    { name: 'ศุภาลัย ธาม เจริญนคร', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%98%E0%B8%B2%E0%B8%A1-%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B8%99%E0%B8%84%E0%B8%A3' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/2w/ba/7mxh2wba5uc/Concept.jpg' },
    { name: 'ศุภาลัย เวอเรนด้า รัตนาธิเบศร์', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%B2-%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B9%80%E0%B8%9A%E0%B8%A8%E0%B8%A3%E0%B9%8C' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/qn/hk/iafbqnhkmvz/SVR-046.jpg' },
    { name: 'ศุภาลัย ลอฟท์ สถานีแคราย', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A5%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B9%81%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A2' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/bf/rz/v5cvbfrzywq/%e0%b9%81%e0%b8%84%e0%b8%a3%e0%b8%b2%e0%b8%a2.jpg' },
    { name: 'ซิตี้โฮม สนามบินน้ำ-รัตนาธิเบศร์', link: 'https://www.supalai.com/project/condo/%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B9%82%E0%B8%AE%E0%B8%A1-%E0%B8%AA%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%9A%E0%B8%B4%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%B3-%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B9%80%E0%B8%9A%E0%B8%A8%E0%B8%A3%E0%B9%8C' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/iv/yz/ahvgivyzr2e/Overall-07-finalresized.jpg' },
    { name: 'ศุภาลัย ซิตี้ รีสอร์ท แจ้งวัฒนะ', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B0' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/qc/op/tf4kqcopdrl/%E0%B8%8B%E0%B8%B4%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87.jpg' },
    { name: 'ศุภาลัย เซนส์ ศรีนครินทร์', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%8B%E0%B8%99%E0%B8%AA%E0%B9%8C-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/tw/bg/ffn3twbgr0g/Overall.jpg' },
  ],
  'ชลบุรี': [
    { name: 'ศุภาลัย ซิตี้ รีสอร์ท ชลบุรี', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B8%8A%E0%B8%A5%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/ag/zk/yhjnagzkvsv/%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89.jpg' },
    { name: 'ศุภาลัย เซนส์ พัทยา', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%8B%E0%B8%99%E0%B8%AA%E0%B9%8C-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/3n/ls/spxo3nlsqy4/City%e0%b8%8a%e0%b8%a5%e0%b8%9a%e0%b8%b8%e0%b8%a3%e0%b8%b5.jpg' },
    { name: 'ศุภาลัย มาเรย์ พัทยา', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%A2%E0%B9%8C-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/tu/hr/yxlmtuhrvcb/MARE%40PATT-5-1.jpg' },
    { name: 'ศุภาลัย วิสต้า ศรีราชา-แยกท่าเรือแหลมฉบัง', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%95%E0%B9%89%E0%B8%B2-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B2-%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B9%81%E0%B8%AB%E0%B8%A5%E0%B8%A1%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%87' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/f5/q3/lomzf5q39k8/%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B22-3.jpg' },
  ],
  'ระยอง': [
    { name: 'ศุภาลัย ซิตี้ รีสอร์ท ระยอง', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%87' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/mp/qx/9fosmpqx6fm/S__26951785.jpg' },
    { name: 'ศุภาลัย ซิตี้โฮม ระยอง', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B9%82%E0%B8%AE%E0%B8%A1-%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%87' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/v8/jh/fvy5v8jhd9w/Untitled-3.jpg' },
  ],
  'ภูเก็ต': [
    { name: 'ศุภาลัย ซีนิค เบย์ คอนโด', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B5%E0%B8%99%E0%B8%B4%E0%B8%84-%E0%B9%80%E0%B8%9A%E0%B8%A2%E0%B9%8C-%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/av/3i/vgsnav3ikcy/TIVE_%e0%b8%a5%e0%b8%b2%e0%b8%a2%e0%b8%99%e0%b9%89%e0%b8%b3.jpg' },
    { name: 'ศุภาลัย วิสต้า ภูเก็ต', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%95%E0%B9%89%E0%B8%B2-%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/ge/4s/o83jge4s6xp/SUPALAI_VISTA%20PHUKET.jpg' },
    { name: 'ศุภาลัย คราม ศรีสุนทร ภูเก็ต', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A1-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%97%E0%B8%A3-%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/du/tg/kafzdutg39b/Banner_Web1200x680.jpg' },
    { name: 'ศุภาลัย เซนส์ เขารัง ภูเก็ต', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%8B%E0%B8%99%E0%B8%AA%E0%B9%8C-%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%87-%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/hs/2e/9ordhs2evxu/WEB_SnKRP_0967_SET.jpg' },
  ],
  'เชียงใหม่': [
    { name: 'ศุภาลัย มอนเต้ @เวียง เชียงใหม่', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A1%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%95%E0%B9%89-%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%87-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-1' + UTM, thumbnail: 'https://www.supalai.com/stocks/project_child_thumbnail/d370x220/0x/3d/muys0x3doof/%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%872-6.jpg' },
  ],
  'ประจวบคีรีขันธ์': [
    { name: 'ศุภาลัย บลูเวล หัวหิน', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9A%E0%B8%A5%E0%B8%B9%E0%B9%80%E0%B8%A7%E0%B8%A5-%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%AB%E0%B8%B4%E0%B8%99' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/is/bn/ahefisbnalz/2.jpg' },
    { name: 'ศุภาลัย คราม เขาเต่า', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A1-%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B9%80%E0%B8%95%E0%B9%88%E0%B8%B2' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/9e/qu/e2mt9equk67/2.jpg' },
  ],
};

const locations = Object.keys(projectsByLocation);

const ProjectListing = () => {
  const [activeTab, setActiveTab] = useState(locations[0]);
  const { ref: titleRef, visible: titleVisible } = useScrollReveal(0.2);
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.1);

  const currentProjects = projectsByLocation[activeTab];
  const newCount = currentProjects.filter((p) => NEW_PROJECTS.has(p.name)).length;
  const readyCount = currentProjects.length - newCount;

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[400px] bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''} text-center mb-12`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-light">Our Projects</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            โครงการคอนโด<span className="gold-shimmer" style={{ fontFamily: "'Prompt', sans-serif" }}>ศุภาลัย</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            เลือกโครงการที่ตอบโจทย์ไลฟ์สไตล์ของคุณ ในทำเลที่ใช่
          </p>
        </div>

        {/* Location tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {locations.map((loc) => {
            const count = projectsByLocation[loc].length;
            const isActive = activeTab === loc;
            return (
              <button
                key={loc}
                onClick={() => setActiveTab(loc)}
                className={`group px-4 md:px-5 py-2 rounded-full text-sm font-body transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold text-primary-foreground border-gold shadow-lg shadow-gold/30 scale-105'
                    : 'border-border text-muted-foreground hover:border-gold/50 hover:text-foreground hover:bg-card'
                }`}
              >
                <span>{loc}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                  isActive ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-gold/10 group-hover:text-gold-light'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status legend */}
        <div className="flex items-center justify-center gap-6 mb-10 text-xs font-body">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>โครงการใหม่ <span className="text-foreground/70">({newCount})</span></span>
          </div>
          <div className="h-3 w-px bg-border" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>พร้อมอยู่ <span className="text-foreground/70">({readyCount})</span></span>
          </div>
        </div>

        {/* Project grid */}
        <div ref={gridRef} key={activeTab}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project, i) => {
              const isNew = NEW_PROJECTS.has(project.name);
              return (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`stagger-item ${gridVisible ? 'visible' : ''} group relative block w-full overflow-hidden rounded-xl border border-border/60 bg-card hover:border-gold/60 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-1 transition-all duration-500`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-video bg-surface-elevated overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Gradient overlay - dark bottom for white title readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

                    {/* Status badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`flex items-center gap-1.5 px-3 py-1 text-[11px] font-body font-semibold rounded-full backdrop-blur-md shadow-lg border ${
                          isNew
                            ? 'bg-red-600/90 text-white border-red-400/50'
                            : 'bg-emerald-600/90 text-white border-emerald-400/50'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-white ${isNew ? 'animate-pulse' : ''}`} />
                        {isNew ? 'โครงการใหม่' : 'พร้อมอยู่'}
                      </span>
                    </div>

                    {/* Hover overlay with view button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="px-5 py-2 rounded-full bg-gold/90 text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                        ดูโครงการ
                      </div>
                    </div>


                    {/* Title overlaid on image bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="font-display text-base md:text-lg text-white leading-tight group-hover:text-gold-light transition-colors duration-300" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="px-4 py-3 flex items-center justify-between border-t border-border/40">
                    <span className="text-[11px] text-muted-foreground tracking-widest uppercase">
                      {activeTab}
                    </span>
                    <span className="text-xs text-gold-light flex items-center gap-1 group-hover:gap-2 transition-all">
                      ดูรายละเอียด
                      <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectListing;

