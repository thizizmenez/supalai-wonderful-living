import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Project {
  name: string;
  link: string;
  thumbnail: string;
}

const UTM = '/?utm_source=website&utm_medium=landingpage&utm_campaign=supalaiwonderful';

const projectsByLocation: Record<string, Project[]> = {
  'กรุงเทพและปริมณฑล': [
    { name: 'ศุภาลัย ลอฟท์ สถานีภาษีเจริญ', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A5%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B5%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/zo/1h/x4kdzo1hid2/REV_ent_copy.jpg' },
    { name: 'ศุภาลัย เวอเรนด้า รามคำแหง', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%B2-%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B3%E0%B9%81%E0%B8%AB%E0%B8%87' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/7z/dh/6uhw7zdhs8t/DJI_0446.jpg' },
    { name: 'ศุภาลัย ซิตี้ รีสอร์ท สุขุมวิท 107', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B8%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%97-107' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/vm/gy/zh8xvmgyjaq/DJI_0100.jpg' },
    { name: 'ศุภาลัย เวอเรนด้า สุขุมวิท 117', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%B2-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B8%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%97-117' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/hg/m0/l13uhgm0hon/DJI_04311.png' },
    { name: 'ศุภาลัย โอเรียนทัล สุขุมวิท 39', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%82%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B8%A5-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B8%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%9739' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/xi/nl/sa4dxinlmxk/Architecture_Night_Shot_(1).jpg' },
    { name: 'ศุภาลัย เอลีท สุขุมวิท 39', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%AD%E0%B8%A5%E0%B8%B5%E0%B8%97-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B8%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%97-39' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/im/hh/njzfimhhwt2/%e0%b8%aa%e0%b8%a3%e0%b8%b0-%e0%b8%81%e0%b8%a5%e0%b8%b2%e0%b8%87%e0%b8%a7%e0%b8%b1%e0%b8%99-008-(1).jpg' },
    { name: 'ศุภาลัย ปาร์ค เอกมัย-พัฒนาการ', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9B%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84-%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%A1%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/xj/t5/is3yxjt5oku/OVERALL-(1).jpg' },
    { name: 'ศุภาลัย ไอคอน สาทร', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%84%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%99-%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/hq/ab/7wjwhqabmsp/Drone%20Shot%201.jpg' },
    { name: 'ศุภาลัย ซิตี้ รีสอร์ท จรัญฯ 91', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B8%88%E0%B8%A3%E0%B8%B1%E0%B8%8D%E0%B8%AF-91' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/de/vl/druidevlafo/PoolB-006(%e0%b9%81%e0%b8%81%e0%b9%89002).jpg' },
    { name: 'ศุภาลัย ปาร์ค สถานีแยกไฟฉาย', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9B%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%84%E0%B8%9F%E0%B8%89%E0%B8%B2%E0%B8%A2' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/k6/bi/onpck6bidun/DJI_0598.jpg' },
    { name: 'ศุภาลัย ลอฟท์ สถานีแยกไฟฉาย', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A5%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%84%E0%B8%9F%E0%B8%89%E0%B8%B2%E0%B8%A2' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/jd/us/qrh9jduspaw/%E0%B9%81%E0%B8%A2%E0%B8%81.png' },
    { name: 'ศุภาลัย พรีเมียร์ สามเสน-ราชวัตร', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C-%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%AA%E0%B8%99-%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%A3' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/ok/lt/aezpokltnra/_VPX5872.jpg' },
    { name: 'ศุภาลัย พรีเมียร์ ตากสิน-วงเวียนใหญ่', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C-%E0%B8%95%E0%B8%B2%E0%B8%81%E0%B8%AA%E0%B8%B4%E0%B8%99-%E0%B8%A7%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/ey/3i/0oapey3icpl/EX_Maingate.jpg' },
    { name: 'ศุภาลัย ลอฟท์ ท่าพระ อินเตอร์เชนจ์', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A5%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8A%E0%B8%99%E0%B8%88%E0%B9%8C' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/xr/9y/xhpgxr9ywgs/Horizon-Sky-Pool(1).jpg' },
    { name: 'ศุภาลัย ไลท์ ท่าพระ-วงเวียนใหญ่', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%84%E0%B8%A5%E0%B8%97%E0%B9%8C-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0-%E0%B8%A7%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/ro/qi/gkyiroqi0z7/_DSC0202.jpg' },
    { name: 'ศุภาลัย ลอฟท์ สาทร-ราชพฤกษ์', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A5%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3-%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9E%E0%B8%A4%E0%B8%81%E0%B8%A9%E0%B9%8C' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/ql/oq/ivufqloq1ps/7B7A7839.jpg' },
    { name: 'ศุภาลัย ธาม เจริญนคร', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%98%E0%B8%B2%E0%B8%A1-%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B8%99%E0%B8%84%E0%B8%A3' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/2w/ba/7mxh2wba5uc/Concept.jpg' },
    { name: 'ศุภาลัย เวอเรนด้า รัตนาธิเบศร์', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%B2-%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B9%80%E0%B8%9A%E0%B8%A8%E0%B8%A3%E0%B9%8C' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/qn/hk/iafbqnhkmvz/SVR-046.jpg' },
    { name: 'ศุภาลัย ลอฟท์ สถานีแคราย', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A5%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B9%81%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A2' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/bf/rz/v5cvbfrzywq/%e0%b9%81%e0%b8%84%e0%b8%a3%e0%b8%b2%e0%b8%a2.jpg' },
    { name: 'ซิตี้โฮม สนามบินน้ำ-รัตนาธิเบศร์', link: 'https://www.supalai.com/project/condo/%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B9%82%E0%B8%AE%E0%B8%A1-%E0%B8%AA%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%9A%E0%B8%B4%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%B3-%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B9%80%E0%B8%9A%E0%B8%A8%E0%B8%A3%E0%B9%8C' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/iv/yz/ahvgivyzr2e/Overall-07-finalresized.jpg' },
    { name: 'ศุภาลัย ซิตี้ รีสอร์ท แจ้งวัฒนะ', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B0' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/qc/op/tf4kqcopdrl/%E0%B8%8B%E0%B8%B4%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87.jpg' },
    { name: 'ศุภาลัย เซนส์ ศรีนครินทร์', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%8B%E0%B8%99%E0%B8%AA%E0%B9%8C-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/tw/bg/ffn3twbgr0g/Overall.jpg' },
  ],
  'ชลบุรี': [
    { name: 'ศุภาลัย ซิตี้ รีสอร์ท ชลบุรี', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B8%8A%E0%B8%A5%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/ag/zk/yhjnagzkvsv/%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89.jpg' },
    { name: 'ศุภาลัย เซนส์ พัทยา', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%8B%E0%B8%99%E0%B8%AA%E0%B9%8C-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/3n/ls/spxo3nlsqy4/City%e0%b8%8a%e0%b8%a5%e0%b8%9a%e0%b8%b8%e0%b8%a3%e0%b8%b5.jpg' },
    { name: 'ศุภาลัย มาเรย์ พัทยา', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%A2%E0%B9%8C-%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/tu/hr/yxlmtuhrvcb/MARE%40PATT-5-1.jpg' },
    { name: 'ศุภาลัย วิสต้า ศรีราชา-แยกท่าเรือแหลมฉบัง', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%95%E0%B9%89%E0%B8%B2-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B2-%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B9%81%E0%B8%AB%E0%B8%A5%E0%B8%A1%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%87' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/f5/q3/lomzf5q39k8/%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B22-3.jpg' },
  ],
  'ระยอง': [
    { name: 'ศุภาลัย ซิตี้ รีสอร์ท ระยอง', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%87' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/mp/qx/9fosmpqx6fm/S__26951785.jpg' },
    { name: 'ศุภาลัย ซิตี้โฮม ระยอง', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B4%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B9%82%E0%B8%AE%E0%B8%A1-%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%87' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/v8/jh/fvy5v8jhd9w/Untitled-3.jpg' },
  ],
  'ภูเก็ต': [
    { name: 'ศุภาลัย ซีนิค เบย์ คอนโด', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%8B%E0%B8%B5%E0%B8%99%E0%B8%B4%E0%B8%84-%E0%B9%80%E0%B8%9A%E0%B8%A2%E0%B9%8C-%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/av/3i/vgsnav3ikcy/TIVE_%e0%b8%a5%e0%b8%b2%e0%b8%a2%e0%b8%99%e0%b9%89%e0%b8%b3.jpg' },
    { name: 'ศุภาลัย วิสต้า ภูเก็ต', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%95%E0%B9%89%E0%B8%B2-%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/ge/4s/o83jge4s6xp/SUPALAI%20VISTA%20PHUKET.jpg' },
    { name: 'ศุภาลัย คราม ศรีสุนทร ภูเก็ต', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A1-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%97%E0%B8%A3-%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/du/tg/kafzdutg39b/Banner_Web1200x680.jpg' },
    { name: 'ศุภาลัย เซนส์ เขารัง ภูเก็ต', link: 'https://www.supalai.com/project/condo/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%8B%E0%B8%99%E0%B8%AA%E0%B9%8C-%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%87-%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95' + UTM, thumbnail: 'https://www.supalai.com/stocks/project/o0x0/hs/2e/9ordhs2evxu/WEB_SnKRP_0967_SET.jpg' },
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

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''} text-center mb-12`}>
          <p className="font-body text-lg text-muted-foreground mb-3 tracking-widest uppercase">
            Our Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            โครงการคอนโด<span className="gold-text" style={{ fontFamily: "'Prompt', sans-serif" }}>ศุภาลัย</span>
          </h2>
        </div>

        {/* Location tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveTab(loc)}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 border ${
                activeTab === loc
                  ? 'bg-gold text-primary-foreground border-gold shadow-lg shadow-gold/20'
                  : 'border-border text-muted-foreground hover:border-gold/50 hover:text-foreground hover:shadow-md'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div ref={gridRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsByLocation[activeTab].map((project, i) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`stagger-item ${gridVisible ? 'visible' : ''} group block w-full overflow-hidden rounded-lg border border-border hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-full aspect-video bg-surface-elevated overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-body text-sm md:text-base text-card-foreground group-hover:text-gold transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    ดูรายละเอียด
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectListing;
