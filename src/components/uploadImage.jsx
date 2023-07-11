import React, { useEffect, useState } from 'react';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadImage = ({ title, maxCount = 1, getFile, getImageUrl }) => {
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState(new File([], '', undefined));

  useEffect(() => {
    if (getFile) {
      getFile(file);
    }
    if (getImageUrl) {
      getImageUrl(imageUrl);
    }
  }, [imageUrl, file]);

  const OnChange = async ({ fileList, file }) => {
    setFileList(fileList);
    if (fileList.length > 0) {
      await handlePreview(fileList[0]);
    } else {
      setImageUrl('');
    }
    setFile(file);
  };

  const handlePreview = async (file) => {
    const fileUrl = await getBase64(file.originFileObj);
    setImageUrl(fileUrl);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <div style={{ margin: '10px 0px' }}>
      <Upload
        onChange={OnChange}
        fileList={fileList}
        beforeUpload={() => false}
        maxCount={maxCount}
      >
        <Button icon={<UploadOutlined />}>{title}</Button>
      </Upload>
    </div>
  );
};

export default UploadImage;
