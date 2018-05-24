let data = {
  projectInfo: {
    //页面左部数据
    name: "7号楼--桩基工程--7-10",
    qaName: "李朋",
    qualityList: [
      "测量定位",
      "钻进成孔",
      "钢筋笼的制作与插入",
      "钢筋笼的制作与插入",
      "钢筋笼的制作与插入",
      "钢筋笼的制作与插入",
      "钢筋笼的制作与插入",
      "钢筋笼的制钢筋笼的制作与插入钢筋笼的制作与插入钢筋笼的制作与插入钢筋笼的制作与插入作与插入"
    ]
  },
  exposureInfo: {
    //页面右部数据
    date: "2015-12-23",
    region: "1区",
    position: "桩基施工",
    question: "进场方桩缺棱掉角严重。",
    liable: "郭富城",
    rectification: "要求加强材料进场检查，不符合材料须作立即退场处理。",
    inspector: "郎晓文"
  },
  chartsInfo: {
    progressData: [
      //总数据
      {
        event: "开工开工开工"
      },
      {
        event: "开工开工开工1"
      },
      {
        event: "开工开工开工2"
      },
      {
        event: "开工开工开工3"
      },
      {
        event: "开工开工开工4"
      },
      {
        event: "开工开工开工5"
      },
      {
        event: "开工开工开工5"
      },
      {
        event: "开工开工开工5"
      },
      {
        event: "开工开工开工5"
      },
      {
        event: "开工开工开工5"
      },
      {
        event: "开工开工开工5"
      },
      {
        event: "开工开工开工5"
      },
      {
        event: "开工开工开工5"
      },
      {
        event: "开工开工开工5"
      },
      {
        event: "开工开工开工5"
      }
    ],
    allDate: {
      //总进度所有数据
      days: 1100, //总天数
      now: "25%", //进度
      list: [{
          date: "2018-01-10",
          event: "开工",
          left: "1%"
        }, //left数据很关键，就是日期所在百分比，比如2018-01-01到2018-01-31是总天数有31天，今天是2018-01-10，就是第十天，10/31所得的百分数就left，记得加上百分号
        {
          date: "2018-03-10",
          event: "开23d工",
          left: "10%"
        },
        {
          date: "2018-04-10",
          event: "开外立面完成工",
          left: "22%"
        },
        {
          date: "2018-06-10",
          event: "开sds工",
          left: "44%"
        },
        {
          date: "2018-07-10",
          event: "外立面完成开工",
          left: "77%"
        },
        {
          date: "2018-12-10",
          event: "外立面完成",
          left: "99%"
        }
      ]
    },
    quarterDate: {
      //季度所有数据
      quarter: "二", //季度
      dateList: [
        //底部日期
        {
          date: "2018-01-10",
          left: "1%"
        },
        {
          date: "2018-03-10",
          left: "10%"
        },
        {
          date: "2018-04-10",
          left: "22%"
        },
        {
          date: "2018-06-10",
          left: "44%"
        },
        {
          date: "2018-07-10",
          left: "77%"
        },
        {
          date: "2018-12-10",
          left: "99%"
        }
      ],
      eventlist: [{
          now: "40%", //进度
          list: [{
              date: "2018-01-10",
              event: "开工 6",
              left: "1%"
            },
            {
              date: "2018-03-10",
              event: "开23d工",
              left: "10%"
            },
            {
              date: "2018-04-10",
              event: "开外立面完成工",
              left: "22%"
            },
            {
              date: "2018-06-10",
              event: "开sds工",
              left: "44%"
            },
            {
              date: "2018-07-10",
              event: "外立面完成开工",
              left: "77%"
            },
            {
              date: "2018-12-10",
              event: "外立面完成",
              left: "99%"
            }
          ]
        },
        {
          now: "10%", //进度
          list: [{
              date: "2018-01-10",
              event: "开工11",
              left: "1%"
            },
            {
              date: "2018-03-10",
              event: "开23d工",
              left: "10%"
            },
            {
              date: "2018-04-10",
              event: "开外立面完成工",
              left: "22%"
            },
            {
              date: "2018-06-10",
              event: "开sds工",
              left: "44%"
            },
            {
              date: "2018-07-10",
              event: "外立面完成开工",
              left: "77%"
            },
            {
              date: "2018-12-10",
              event: "外立面完成",
              left: "99%"
            }
          ]
        }
      ]
    },
    weekDate: {
      //周数据
      list: [{
          event: "浇水完成",
          completionRate: "70%"
        },
        {
          event: "浇水完成1",
          completionRate: "10%"
        },
        {
          event: "浇水完成1",
          completionRate: "20%"
        },
        {
          event: "浇水完成1",
          completionRate: "50%"
        },
        {
          event: "浇水完成1",
          completionRate: "100%"
        },
        {
          event: "浇水完成1",
          completionRate: "50%"
        },
        {
          event: "浇水完成1",
          completionRate: "72%"
        },
        {
          event: "浇水完成1",
          completionRate: "20%"
        },
        {
          event: "浇水完1111dasd成",
          completionRate: "11%"
        }
      ]
    }
  }
}

export default data
