"use client";
import React, { useState, useCallback } from "react";
import { secureApiCall } from "@/app/utils/api";
import TrainingDay from "./TrainingDay";
import AddTrainigMenu from "./AddTrainigMenu";
import { Set, TrainingMenu } from "../../../../types"; // Set 型をインポート

export default function TrainingRecord() {
  // ここで初期値を空の配列に設定
  const [trainingDay, setTrainingDay] = useState<Date | null>(null);
  const [trainingMenus, setTrainingMenus] = useState<any[]>([]);
  const [trainingSets, setTrainingSets] = useState<any[]>([]);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState("");

  // const totalDays = 90; // トレーニングプログラムの総日数として固定値を使用
  // const startDate = new Date();

  // トレーニング日の更新
  const handleTrainingDayChange = useCallback((date: Date | null) => {
    setTrainingDay(date);
  }, []);

  // メニューとセットの更新を受け取る
  const handleTrainingMenusChange = useCallback((menus: any) => {
    setTrainingMenus(menus);
  }, []);

  const handleTrainingSetsChange = useCallback((sets: any) => {
    setTrainingSets(sets);
  }, []);

  // トレーニングセットの状態を更新する関数
  // const updateTrainingSets = (menuIndex: number, newSets: Set[]) => {
  //   const updatedTrainingSets = [...trainingSets];
  //   updatedTrainingSets[menuIndex] = newSets;
  //   console.log("Updating sets");
  //   setTrainingSets(updatedTrainingSets);
  // };
  const handleSaveTrainingRecord = async () => {
    const payload = {
      day: trainingDay,
      menu: trainingMenus.map((menu) => ({
        bodyPart: menu.bodyPart,
        exerciseName: menu.exerciseName,
        sets: menu.sets.map((set: any) => ({
          setNumber: set.number,
          weight: set.weight,
          reps: set.reps,
          completed: set.completed,
        })),
      })),
    };
    console.log("ペイロード", payload);
    try {
      const response = await secureApiCall(
        "api/v1/training_days",
        "POST",
        payload
      );
      console.log("記録保存成功", response);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000); // 3秒後にメッセージを消す
    } catch (error) {
      console.log("Error saving record", error);
      setSaveError("記録の保存に失敗しました。"); // エラーメッセージを設定
      setTimeout(() => setSaveError(""), 3000); // 3秒後にメッセージを消す
    }
  };

  return (
    <div>
      <TrainingDay
        setTrainingDay={handleTrainingDayChange}
        totalDays={90} // 必要に応じて
        startDate={new Date()}
      />
      <AddTrainigMenu
        setTrainingMenus={handleTrainingMenusChange}
        trainingMenus={trainingMenus}
        trainingSets={trainingSets}
      />
      {saveSuccess && (
        <p className="text-white bg-green-500 p-3 rounded-md">
          保存が成功しました！
        </p>
      )}
      {saveError && (
        <p className="text-white bg-red-500 p-3 rounded-md">{saveError}</p>
      )}
      <button
        className="bg-blue-500 text-white p-2 mx-2 rounded hover:bg-blue-700"
        onClick={handleSaveTrainingRecord}
      >
        保存
      </button>
    </div>
  );
}