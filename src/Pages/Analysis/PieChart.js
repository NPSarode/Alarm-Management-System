import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const PieChart = ({ data, chartId, width, height }) => {
  useLayoutEffect(() => {
    var root = am5.Root.new(chartId);

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
      })
    );


    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "alarm_count",
        categoryField: "alarm_type_name",
        endAngle: 270,
      })
    );

    series.states.create("hidden", {
      endAngle: -90,
    });

    series.data.setAll(data);

    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [data]);

  return <div id={chartId} style={{ width, height }}></div>;
};

export default PieChart;
