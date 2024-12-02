import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { 
  DocumentIcon, 
  ArrowDownTrayIcon,
  TrashIcon 
} from '@heroicons/react/24/outline';

const documents = [
  {
    id: 1,
    name: 'Employment Contract - Sarah Chen.pdf',
    type: 'PDF',
    size: '2.4 MB',
    uploadedAt: '2024-01-15',
    category: 'Contracts'
  },
  {
    id: 2,
    name: 'January 2024 Payroll Report.xlsx',
    type: 'XLSX',
    size: '1.8 MB',
    uploadedAt: '2024-01-10',
    category: 'Payroll'
  },
  {
    id: 3,
    name: 'Compliance Documentation Q1 2024.pdf',
    type: 'PDF',
    size: '3.2 MB',
    uploadedAt: '2024-01-05',
    category: 'Compliance'
  }
];

const Documents = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle file upload logic here
    console.log('Uploaded files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>

      {/* Upload Section */}
      <div 
        {...getRootProps()} 
        className={`mt-6 border-2 border-dashed rounded-lg p-12 text-center
          ${isDragActive ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />
        <DocumentIcon className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop files here, or click to select files
        </p>
      </div>

      {/* Documents List */}
      <div className="mt-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Size
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Uploaded
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {documents.map((document) => (
                          <tr key={document.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <DocumentIcon className="h-5 w-5 text-gray-400 mr-2" />
                                <div className="text-sm font-medium text-gray-900">
                                  {document.name}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                {document.category}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {document.size}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {document.uploadedAt}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-red-600 hover:text-red-900 mr-4">
                                <ArrowDownTrayIcon className="h-5 w-5" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <TrashIcon className="h-5 w-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;